import { StackFrameEffect } from "./index";
import { BaseSideEffect, SideEffectType } from "./types";

export interface MicroTaskEffect extends BaseSideEffect {
  type: SideEffectType.MICROTASK;
}

type Options = Pick<StackFrameEffect, "handler" | "sideEffects">;

export const microTask = (name: string, options: Options): MicroTaskEffect => ({
  type: SideEffectType.MICROTASK,
  name,
  delay: 500,
  ...options,
});
