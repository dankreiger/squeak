import { EFixtureType } from '../enums';
import type { TFixtureRegistry } from '../types';
import { edgeF0, edgeF1, edgeF2 } from './edge';
import { realisticF0, realisticF1, realisticF2 } from './realistic';

export const OPENING_HOURS_FIXTURES: TFixtureRegistry = {
  [EFixtureType.EDGE]: { f0: edgeF0, f1: edgeF1, f2: edgeF2 },
  [EFixtureType.REALISTIC]: {
    f0: realisticF0,
    f1: realisticF1,
    f2: realisticF2,
  },
};
