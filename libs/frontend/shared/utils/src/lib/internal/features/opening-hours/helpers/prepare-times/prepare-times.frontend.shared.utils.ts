import { i18n } from '@squeak-frontend/shared.i18n';
import {
  EOpeningHoursUIDataType,
  IOpeningHoursUIData,
  TOpeningHoursUI,
} from '@squeak-frontend/shared.types';
import { LANG_LIST } from '@squeak-shared.constants';
import { ELocale } from '@squeak-shared.enums';
import { TEntries } from '@squeak-shared.utils';
import { ArrayHelper, IThreadConfig } from 'puppy-seq';
import { head, isEmpty, last } from 'ramda';
import { getFmtTime } from '../../../../functions/date-times';
const { OPEN_24_HOURS, CLOSED_ALL_DAY, OPEN, CLOSE } = EOpeningHoursUIDataType;

const allDayText = (isOpen24Hours: boolean, lng: ELocale) =>
  i18n.t(isOpen24Hours ? 'open_24_hours' : 'closed', { lng });

const display = (time: IOpeningHoursUIData) =>
  LANG_LIST.reduce((acc, cur) => {
    acc[cur] = getFmtTime(time.value as number, cur);
    return acc;
  }, {} as IOpeningHoursUIData['display']);

const checkOpen24Hours = ({
  idxMap: { prev, now },
  arrCopy,
}: IThreadConfig<TEntries<TOpeningHoursUI>>) => {
  let prevIdx = prev;
  let currentIdx = now;
  for (let i = 0; i < arrCopy.length; i++) {
    const [_, prevDayTimes] = arrCopy[prevIdx];
    const [__, currentDayTimes] = arrCopy[currentIdx];
    if (head(currentDayTimes)?.type === CLOSE) {
      return false;
    }

    if (isEmpty(currentDayTimes)) {
      const { type } = last(prevDayTimes) || {};
      switch (type) {
        case OPEN:
          return true;
        case CLOSE:
          return false;
        default:
          prevIdx = ArrayHelper.prevIdx(prevIdx, arrCopy);
          currentIdx = ArrayHelper.prevIdx(currentIdx, arrCopy);
      }
    } else {
      return false;
    }
  }
  return false;
};

export const prepareTimes = ({
  currentTimes,
  config,
}: {
  currentTimes: IOpeningHoursUIData[];
  config: IThreadConfig<TEntries<TOpeningHoursUI>>;
}): IOpeningHoursUIData[] => {
  const UIData = currentTimes as IOpeningHoursUIData[];

  if (isEmpty(currentTimes)) {
    const isOpen24Hours = checkOpen24Hours(config);

    UIData.push({
      type: isOpen24Hours ? OPEN_24_HOURS : CLOSED_ALL_DAY,
      value: null,
      display: {
        [ELocale.enUS]: allDayText(isOpen24Hours, ELocale.enUS),
        [ELocale.deDE]: allDayText(isOpen24Hours, ELocale.deDE),
        [ELocale.fiFI]: allDayText(isOpen24Hours, ELocale.fiFI),
      },
    });

    return UIData;
  }

  return UIData.map((time) => ({
    ...time,
    display: display(time),
  }));
};
