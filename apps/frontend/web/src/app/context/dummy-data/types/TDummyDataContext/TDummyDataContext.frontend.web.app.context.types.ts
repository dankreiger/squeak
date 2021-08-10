import type { TRestaurantsResponse } from '@squeak-shared.types';
import { NormalizedSchema } from 'normalizr';

export type TDummyDataContext = NormalizedSchema<
  Record<'dummyData', TRestaurantsResponse>,
  Array<number>
>;
