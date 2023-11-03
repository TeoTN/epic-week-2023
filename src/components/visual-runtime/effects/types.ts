import { SideEffect } from './index';

export interface Origin {
  x: number;
  y: number;
}

export enum SideEffectType {
  PUSH_LINE = 'PUSH_LINE',
  STACK_FRAME = 'STACK_FRAME',
  TASK = 'TASK',
  API_CALL = 'API_CALL',
  POP_EFFECT = 'POP_EFFECT',
  REPEAT = 'REPEAT',
  COMPOSE = 'COMPOSE',
  MICROTASK = 'MICROTASK',
}

export interface BaseSideEffect {
  handler?: string;
  type: SideEffectType;
  name: string;
  sideEffects?: SideEffect[];
  animateFrom?: Origin;
  delay: number;
}
