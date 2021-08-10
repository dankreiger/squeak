import { EOpeningHoursTimeType } from '@squeak-shared.enums';

export type TOpeningHoursData = {
  type: EOpeningHoursTimeType.OPEN | EOpeningHoursTimeType.CLOSE;
  value: number;
};
