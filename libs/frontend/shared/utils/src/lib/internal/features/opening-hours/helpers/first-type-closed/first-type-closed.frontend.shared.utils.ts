import { EOpeningHoursTimeType } from '@squeak-shared.enums';
import { compose, head } from 'ramda';
import { hasPropType } from '../../../../functions/objects';

export const firstTypeClosed: <T>(arr: T[]) => boolean = compose(
  hasPropType('type', EOpeningHoursTimeType.CLOSE),
  head
);
