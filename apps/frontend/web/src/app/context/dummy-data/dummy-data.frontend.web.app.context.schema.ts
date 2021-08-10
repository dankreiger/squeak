import { TRestaurantResponse } from '@squeak-shared.types';
import { schema } from 'normalizr';

export const dummyDataSchema = new schema.Entity<TRestaurantResponse>(
  'dummyData'
);
export const dummyDataListSchema = [dummyDataSchema];
