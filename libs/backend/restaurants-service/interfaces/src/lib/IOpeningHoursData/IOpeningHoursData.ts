import { EOpeningHoursDataType } from '@leckerli-backend/restaurants-service.enums';

export interface IOpeningHoursData {
  type: EOpeningHoursDataType.OPEN | EOpeningHoursDataType.CLOSE;
  value: number;
}
