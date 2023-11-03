import { BaseSideEffect, SideEffectType } from './types';
import { SideEffect } from './index';

export interface ComposeEffect extends BaseSideEffect {
  type: SideEffectType.COMPOSE;
  name: '';
  sideEffects: SideEffect[];
}

export const compose = (...sideEffects: SideEffect[]): ComposeEffect => ({
  type: SideEffectType.COMPOSE,
  name: '',
  sideEffects,
  delay: 0,
});
