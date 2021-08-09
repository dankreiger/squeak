import { EDayOfWeek } from '@leckerli-backend/restaurants-service.enums';
import type { IOpeningHoursData } from '@leckerli-backend/restaurants-service.interfaces';

export type TOpeningHours = Record<EDayOfWeek, IOpeningHoursData[] | []>;
