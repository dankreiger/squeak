import { EDayOfWeek } from '@squeak-shared.enums';
import type { TOpeningHoursData } from '../TOpeningHoursData';

export type TOpeningHours = Record<
  EDayOfWeek,
  readonly TOpeningHoursData[] | []
>;
