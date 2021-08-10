import { EDayOfWeek } from '@squeak-shared.enums';
import { daysOfWeek } from './daysOfWeek';

export const daysOfWeekIdxMap = daysOfWeek.reduce((acc, cur, idx) => {
  acc[cur] = idx;
  return acc;
}, {} as Record<EDayOfWeek, number>);
