import type { TDayOfWeek } from '@squeak-shared.types';
import { IOpeningHoursUIData } from '../interfaces';
export type TOpeningHoursUI = Record<TDayOfWeek, IOpeningHoursUIData[]>;
