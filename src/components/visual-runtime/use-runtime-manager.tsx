import {
  ApiCallEffect,
  MicroTaskEffect,
  SideEffect,
  StackFrameEffect,
  TaskEffect,
} from "./effects";
import { RuntimeManager } from "./interfaces";
import { useCallback, useMemo, useState } from "react";
import { SideEffectType } from "./effects/types";

const getKey = ({ name, type, handler }: SideEffect) =>
  JSON.stringify({ name, type, handler });

export const useRuntimeManager = (): RuntimeManager => {
  const [linePointer, setLinePointer] = useState(1);
  const [effects, setEffects] = useState<SideEffect[]>([]);
  const stack = useMemo(
    () =>
      effects.filter(
        (effect): effect is StackFrameEffect =>
          effect.type === SideEffectType.STACK_FRAME,
      ),
    [effects],
  );
  const tasks = useMemo(
    () =>
      effects.filter(
        (effect): effect is TaskEffect => effect.type === SideEffectType.TASK,
      ),
    [effects],
  );
  const microTasks = useMemo(
    () =>
      effects.filter(
        (effect): effect is MicroTaskEffect =>
          effect.type === SideEffectType.MICROTASK,
      ),
    [effects],
  );
  const apiCalls = useMemo(
    () =>
      effects.filter(
        (effect): effect is ApiCallEffect =>
          effect.type === SideEffectType.API_CALL,
      ),
    [effects],
  );
  const findEffect = useCallback(
    (lookup: SideEffect["handler"]) =>
      effects.find(({ handler }) => handler === lookup),
    [effects],
  );

  const handlers = useMemo(
    () => ({
      pushEffect: (effect: SideEffect) =>
        setEffects((effects) => [...effects, effect]),
      revertEffect: (revertedEffect: SideEffect) =>
        setEffects((effects) => {
          return effects.filter(
            (effect) => getKey(effect) !== getKey(revertedEffect),
          );
        }),
      findEffect,
      pushLinePtr: (nextPtr?: number) =>
        setLinePointer((ptr) => (nextPtr !== undefined ? nextPtr : ptr + 1)),
      reset: () => {
        setEffects([]);
        setLinePointer(1);
      },
    }),
    [findEffect, setEffects, setLinePointer],
  );

  return useMemo(
    () => ({
      linePointer,
      stack,
      tasks,
      microTasks,
      apiCalls,
      ...handlers,
    }),
    [stack, tasks, microTasks, apiCalls, linePointer, handlers],
  );
};
