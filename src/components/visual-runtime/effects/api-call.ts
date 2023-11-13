import { StackFrameEffect } from "./index";
import { BaseSideEffect, SideEffectType } from "./types";

export interface ApiCallEffect extends BaseSideEffect {
  type: SideEffectType.API_CALL;
}

type Options = Pick<StackFrameEffect, "handler" | "sideEffects">;

export const apiCall = (name: string, options: Options): ApiCallEffect => ({
  type: SideEffectType.API_CALL,
  name,
  delay: 500,
  ...options,
});
