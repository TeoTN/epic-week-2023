import { BaseSideEffect, SideEffectType } from './types';
import { SideEffect, StackFrameEffect } from './index';

export interface ApiCallEffect extends BaseSideEffect {
  type: SideEffectType.API_CALL;
}

type Options = Pick<
  StackFrameEffect,
  'handler' | 'sideEffects'
  >;


export const apiCall = (name: string, options: Options): ApiCallEffect => ({
  type: SideEffectType.API_CALL,
  name,
  delay: 500,
  ...options,
});
