// eslint-disable-next-line @typescript-eslint/no-empty-function
import { SideEffect } from './effects';
import { useCallback, useContext } from 'react';
import { RuntimeContext } from './runtime-context';
import { SideEffectType } from './effects/types';
import { UnreachableCaseError } from './utils';
import { delay } from './effects/delay';

const noop = () => {};
const invoke = (fn: () => void) => fn();
export type RevertCallback = () => void;
type Dispatcher = (effect: SideEffect) => Promise<RevertCallback>;

async function* repeater(effects: SideEffect[]) {
  for (const effect of effects) {
    yield effect;
    await delay(effect.delay);
  }
}

export const useDispatch = (): Dispatcher => {
  const manager = useContext(RuntimeContext);
  if (!manager) {
    throw new Error('Cannot use outside of RuntimeContext');
  }

  const getRevertCallback = (effect: SideEffect): RevertCallback => {
    switch (effect.type) {
      case SideEffectType.STACK_FRAME:
      case SideEffectType.API_CALL:
      case SideEffectType.TASK:
      case SideEffectType.MICROTASK:
        return () => {
          effect.sideEffects?.forEach(console.log);
          effect.sideEffects?.map(getRevertCallback).forEach(invoke);
          manager.revertEffect(effect);
        };
      case SideEffectType.PUSH_LINE:
        const ln = manager.linePointer;
        return () => manager.pushLinePtr(ln);
      case SideEffectType.POP_EFFECT:
        const byHandler = manager.findEffect(effect.name);
        if (!byHandler) {
          return noop;
        }
        return () => manager.pushEffect(byHandler);
      case SideEffectType.COMPOSE:
      case SideEffectType.REPEAT:
        return () => effect.sideEffects.map(getRevertCallback).forEach(invoke);
      default: {
        console.info(effect);
        throw new UnreachableCaseError(effect);
      }
    }
  };

  const dispatcher: Dispatcher = useCallback(
    async (effect: SideEffect): Promise<RevertCallback> => {
      await delay(effect.delay);
      const onRevert = getRevertCallback(effect);
      switch (effect.type) {
        case SideEffectType.STACK_FRAME:
        case SideEffectType.API_CALL:
        case SideEffectType.TASK:
        case SideEffectType.MICROTASK:
          manager.pushEffect(effect);
          return onRevert;
        case SideEffectType.PUSH_LINE:
          manager.pushLinePtr(effect.ptr);
          return onRevert;
        case SideEffectType.POP_EFFECT:
          const byHandler = manager.findEffect(effect.name);
          if (!byHandler) {
            return noop;
          }
          manager.revertEffect(byHandler);
          return onRevert;
        case SideEffectType.COMPOSE: {
          await Promise.all(effect.sideEffects.map(dispatcher));
          return onRevert;
        }
        case SideEffectType.REPEAT: {
          for await (const e of repeater(effect.sideEffects)) {
            await dispatcher(e);
          }
          return onRevert;
        }
        default: {
          console.info(effect);
          throw new UnreachableCaseError(effect);
        }
      }
    },
    [manager],
  );
  return dispatcher;
};
