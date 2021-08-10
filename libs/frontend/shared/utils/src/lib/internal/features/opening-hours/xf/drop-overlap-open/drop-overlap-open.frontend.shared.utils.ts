import { Map } from 'puppy-seq';
import { tail } from 'ramda';
import { TOpeningHoursMapperTuple as T } from './../../types';

export const dropOverlapOpen = Map.mapReducer<T, T>(([day, times], { ___ }) => {
  let timesCopy = [...times];
  if (___.dropFirstTime) {
    timesCopy = tail(timesCopy);
    ___.dropFirstTime = false;
  }
  return [day, timesCopy];
});
