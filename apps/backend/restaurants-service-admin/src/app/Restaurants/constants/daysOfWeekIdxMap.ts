import { EDayOfWeek } from '../types/enums';
import { daysOfWeek } from './daysOfWeek';

export const daysOfWeekIdxMap = daysOfWeek.reduce((acc, cur, idx) => {
  acc[cur] = idx;
  return acc;
}, {} as Record<EDayOfWeek, number>);
