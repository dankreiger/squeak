import { i18n } from '@squeak-frontend/shared.i18n';
import {
  EOpeningHoursUIDataType,
  TOpeningHoursUI,
} from '@squeak-frontend/shared.types';
import { EColor } from '@squeak-frontend/shared.ui';
import { EDayOfWeek, ELocale } from '@squeak-shared.enums';
import { TEntries } from '@squeak-shared.utils';

const { OPEN, CLOSE, CLOSED_ALL_DAY } = EOpeningHoursUIDataType;
const daysOfWeek = Object.values(EDayOfWeek);
export const formatTimesForUI = ([day, times]: TEntries<TOpeningHoursUI>) => {
  let rightColor = EColor.TEXT;

  const str = times.reduce((acc: string, { display, type }, i, arr) => {
    rightColor = EColor.TEXT;

    let fmtDisplay = display[i18n.language as ELocale];
    switch (type) {
      case OPEN:
        fmtDisplay = `${fmtDisplay} - `;
        break;
      case CLOSE:
        if (i !== arr.length - 1) {
          fmtDisplay = `${fmtDisplay}, `;
        }
        break;
      case CLOSED_ALL_DAY:
        rightColor = EColor.SECONDARY;
        break;
      default:
        break;
    }

    return acc + fmtDisplay;
  }, '');
  const currentDayIdx = (new Date().getDay() + 6) % 7;
  return {
    left: i18n.t(day),
    right: str,
    rightColor,
    ...(daysOfWeek[currentDayIdx] === day && {
      accentedText: i18n.t('today', { lng: i18n.language }),
    }),
  };
};
