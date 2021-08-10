import { EDayOfWeek } from '@squeak-shared.enums';

export type TOpeningHoursSource<T extends string> =
  `openingHours[${number}][${EDayOfWeek}].${T}`;
