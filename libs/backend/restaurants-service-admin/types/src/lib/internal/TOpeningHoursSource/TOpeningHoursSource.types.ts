import { EDayOfWeek } from '@squeak-backend/restaurants-service.enums';

export type TOpeningHoursSource<T extends string> =
  `openingHours[${number}][${EDayOfWeek}].${T}`;
