import {
  ApiCallEffect, MicroTaskEffect,
  SideEffect,
  StackFrameEffect,
  TaskEffect
} from "./effects";

export interface RuntimeManager {
  linePointer: number;
  stack: StackFrameEffect[];
  tasks: TaskEffect[];
  microTasks: MicroTaskEffect[];
  apiCalls: ApiCallEffect[];
  pushEffect: (effect: SideEffect) => void;
  revertEffect: (effect: SideEffect) => void;
  findEffect: (handler: string) => SideEffect | undefined;
  pushLinePtr: (ptr?: number) => void;
  reset: () => void;
}
