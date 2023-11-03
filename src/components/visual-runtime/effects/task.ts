import { BaseSideEffect, SideEffectType } from './types';
import { StackFrameEffect } from './push-stack';

export interface TaskEffect extends BaseSideEffect {
  type: SideEffectType.TASK;
}

type TaskOptions = Pick<
  StackFrameEffect,
  'handler' | 'sideEffects'
>;

export const task = (
  name: string,
  delay = 500,
  options: TaskOptions = {},
): TaskEffect => ({
  type: SideEffectType.TASK,
  name,
  delay,
  ...options,
});
