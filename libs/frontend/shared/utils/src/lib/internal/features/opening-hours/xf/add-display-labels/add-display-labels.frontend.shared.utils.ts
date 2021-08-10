import { Map } from 'puppy-seq';
import { prepareTimes } from '../../helpers';
import { TOpeningHoursMapperTuple as T } from '../../types';

export const addDisplayLabels = Map.mapReducer<T, T>(([day, times], config) => {
  const currentTimes = [...times];
  return [day, prepareTimes({ currentTimes, config })];
});
