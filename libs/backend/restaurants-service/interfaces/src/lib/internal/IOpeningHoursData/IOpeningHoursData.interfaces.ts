import { EOpeningHoursDataType } from '@squeak-backend/restaurants-service.enums';

export interface IOpeningHoursData {
  type: EOpeningHoursDataType.OPEN | EOpeningHoursDataType.CLOSE;
  value: number;
}
