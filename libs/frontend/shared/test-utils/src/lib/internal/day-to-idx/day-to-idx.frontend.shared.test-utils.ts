import { EDayOfWeek } from '@squeak-shared.enums';

export const dayToIdx = Object.values(EDayOfWeek).reduce((acc, cur, i) => {
  acc[cur] = i;
  return acc;
}, {} as Record<EDayOfWeek, number>);
