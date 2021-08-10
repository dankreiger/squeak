import { ELocale } from '@squeak-shared.enums';
import { EOpeningHoursUIDataType } from '../../enums';

export interface IOpeningHoursUIData {
  type: EOpeningHoursUIDataType;
  value: number | null;
  display: Record<ELocale, string>;
}
