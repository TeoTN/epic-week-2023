import { BaseSideEffect, SideEffectType } from './types';

export interface PopEffect extends BaseSideEffect {
  type: SideEffectType.POP_EFFECT;
}

export const popStack = (lookup: string): PopEffect => ({
  type: SideEffectType.POP_EFFECT,
  name: lookup,
  delay: 0,
});
