import type { TOpeningHours } from '@squeak-shared.types';
import { EFixtureType } from '../../enums';
import type { TFixtureKey } from '../TFixtureKey';

export type TFixtureRegistry = Record<
  EFixtureType,
  Record<TFixtureKey, TOpeningHours>
>;
