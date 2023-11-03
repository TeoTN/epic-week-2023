import { BaseSideEffect, SideEffectType } from './types';
import { SideEffect } from './index';

export interface RepeatEffect extends BaseSideEffect {
  type: SideEffectType.REPEAT;
  name: '';
  sideEffects: SideEffect[];
}

interface Options {
  times: number;
}

export const repeat = (effectCreator: () => SideEffect, { times }: Options): RepeatEffect => ({
  type: SideEffectType.REPEAT,
  name: '',
  sideEffects: Array.from(new Array(times), effectCreator),
  delay: 300,
});
