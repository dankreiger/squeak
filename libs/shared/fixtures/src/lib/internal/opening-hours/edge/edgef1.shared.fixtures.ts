import { EOpeningHoursTimeType } from '@squeak-shared.enums';

const { OPEN, CLOSE } = EOpeningHoursTimeType;

/**
 * @description
 *
 * Restaurant closes at midnight, and opens one hour later (see sunday)
 */
export const edgeF1 = {
  monday: [],
  tuesday: [
    { type: OPEN, value: 36000 },
    { type: CLOSE, value: 64800 },
  ],
  wednesday: [],
  thursday: [
    { type: OPEN, value: 36000 },
    { type: CLOSE, value: 64800 },
  ],
  friday: [
    {
      type: OPEN,
      value: 64800,
    },
  ],
  saturday: [
    {
      type: CLOSE,
      value: 3600,
    },
    {
      type: OPEN,
      value: 32400,
    },
    {
      type: CLOSE,
      value: 39600,
    },
    {
      type: OPEN,
      value: 57600,
    },
  ],
  sunday: [
    {
      type: CLOSE,
      value: 0,
    },
    { type: OPEN, value: 3600 },
    { type: CLOSE, value: 75600 },
  ],
};
