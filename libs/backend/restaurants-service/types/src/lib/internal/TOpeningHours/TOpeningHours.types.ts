import { EDayOfWeek } from '@squeak-backend/restaurants-service.enums';
import type { IOpeningHoursData } from '@squeak-backend/restaurants-service.interfaces';

export type TOpeningHours = Record<EDayOfWeek, IOpeningHoursData[] | []>;
