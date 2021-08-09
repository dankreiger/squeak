import { EOpeningHoursDataType } from './enums';

export interface IOpeningHoursData {
  type: EOpeningHoursDataType.OPEN | EOpeningHoursDataType.CLOSE;
  value: number;
}
