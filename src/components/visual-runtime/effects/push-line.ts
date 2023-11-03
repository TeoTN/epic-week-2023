import { BaseSideEffect, SideEffectType } from './types';

export interface NextLineEffect extends BaseSideEffect {
  type: SideEffectType.PUSH_LINE;
  name: '';
  ptr?: number;
}

export const pushLine = (ptr?: number): NextLineEffect => ({
  type: SideEffectType.PUSH_LINE,
  name: '',
  ptr,
  delay: ptr === undefined ? 100 : 0,
});
