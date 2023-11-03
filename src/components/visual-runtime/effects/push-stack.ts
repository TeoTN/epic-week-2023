import { BaseSideEffect, SideEffectType } from './types';

export interface StackFrameEffect extends BaseSideEffect {
  type: SideEffectType.STACK_FRAME;
  args: Array<string | number>;
  ln: number;
}

type PushStackOptions = Pick<StackFrameEffect, 'args' | 'ln' | 'sideEffects' | 'animateFrom' | 'handler'>;

export const pushStack = (name: string, options: PushStackOptions): StackFrameEffect => ({
  type: SideEffectType.STACK_FRAME,
  name,
  delay: 0,
  ...options,
});
