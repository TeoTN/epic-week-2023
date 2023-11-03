import { ApiCallEffect } from './api-call';
import { ComposeEffect } from './compose';
import { PopEffect } from './pop-stack';
import { NextLineEffect } from './push-line';
import { StackFrameEffect } from './push-stack';
import { TaskEffect } from './task';
import { RepeatEffect } from './repeat';
import { MicroTaskEffect } from './microtask';

export type {
  TaskEffect,
  MicroTaskEffect,
  ApiCallEffect,
  StackFrameEffect,
  NextLineEffect,
  PopEffect,
  RepeatEffect,
  ComposeEffect,
};

export type SideEffect =
  | TaskEffect
  | ApiCallEffect
  | StackFrameEffect
  | NextLineEffect
  | PopEffect
  | RepeatEffect
  | ComposeEffect
  | MicroTaskEffect;

export { apiCall } from './api-call';
export { compose } from './compose';
export { popStack } from './pop-stack';
export { pushLine } from './push-line';
export { pushStack } from './push-stack';
export { repeat } from './repeat';
export { task } from './task';
export { microTask } from './microtask';
