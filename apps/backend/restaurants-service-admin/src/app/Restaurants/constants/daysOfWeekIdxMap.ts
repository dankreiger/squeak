import { EDayOfWeek } from '@squeak-backend/restaurants-service.enums';
import { daysOfWeek } from './daysOfWeek';

export const daysOfWeekIdxMap = daysOfWeek.reduce((acc, cur, idx) => {
  acc[cur] = idx;
  return acc;
}, {} as Record<EDayOfWeek, number>);
