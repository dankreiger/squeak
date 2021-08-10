import { IOpeningHoursUIData } from '@squeak-frontend/shared.types';
import { Map } from 'puppy-seq';
import { append, head } from 'ramda';
import { firstTypeClosed, lastTypeOpen } from '../../helpers';
import { TOpeningHoursMapperTuple as T } from './../../types';

export const appendOverlapClose = Map.mapReducer<T, T>(
  ([day, times], { arrCopy, idxMap: { next }, ___ }) => {
    let timesCopy: IOpeningHoursUIData[] = [...times];

    if (lastTypeOpen(timesCopy)) {
      const nextDayTimes = arrCopy[next][1] as IOpeningHoursUIData[];

      if (firstTypeClosed(nextDayTimes)) {
        timesCopy = append(
          head(nextDayTimes),
          timesCopy
        ) as IOpeningHoursUIData[];
        ___.dropFirstTime = true;
      }
    }
    return [day, timesCopy];
  }
);
