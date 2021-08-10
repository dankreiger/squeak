import { TOpeningHoursUI } from '@squeak-frontend/shared.types';
import { TOpeningHours } from '@squeak-shared.types';
import { entries, TEntries } from '@squeak-shared.utils';
import { seq } from 'puppy-seq';
import { compose } from 'ramda';
import { addDisplayLabels, appendOverlapClose, dropOverlapOpen } from './xf';

/**
 * iterate through list one time
 */
const fnPipeline = compose(
  dropOverlapOpen,
  appendOverlapClose,
  addDisplayLabels
);

export const getUIOpeningHours = (openingTimes: TOpeningHours) =>
  seq(fnPipeline, entries(openingTimes)) as TEntries<TOpeningHoursUI>[];
