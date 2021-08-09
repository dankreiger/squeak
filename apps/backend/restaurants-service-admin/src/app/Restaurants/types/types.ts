import { EDayOfWeek } from './enums';
import { IOpeningHoursData } from './interfaces';

export type TOpeningHours = Record<EDayOfWeek, IOpeningHoursData[] | []>;
export type TOpeningHoursSource<T extends string> =
  `openingHours[${number}][${EDayOfWeek}].${T}`;

export interface TRestaurant {
  name: string;
  city: string;
  country: string;
  openingHours: TOpeningHours;
}
