import { createContext } from 'react';
import { RuntimeManager } from './interfaces';

export const RuntimeContext = createContext<RuntimeManager | undefined>(
  undefined,
);