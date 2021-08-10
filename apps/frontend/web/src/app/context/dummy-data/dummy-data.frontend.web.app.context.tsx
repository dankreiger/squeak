import { createContext } from 'react';
import type { TDummyDataContext } from './types';

export const DummyDataContext = createContext({} as TDummyDataContext);
