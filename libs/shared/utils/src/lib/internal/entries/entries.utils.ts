/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TEntries } from './types';

export const entries = <T extends Record<string, any>>(t: T): TEntries<T>[] =>
  Object.entries(t) as any;
