import { EOpeningHoursTimeType } from '@squeak-shared.enums';
import { compose, last } from 'ramda';
import { hasPropType } from '../../../../functions/objects';

export const lastTypeOpen: <T>(arr: T[]) => boolean = compose(
  hasPropType('type', EOpeningHoursTimeType.OPEN),
  last
);
