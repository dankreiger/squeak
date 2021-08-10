import { EOpeningHoursTimeType } from '@squeak-shared.enums';

const { OPEN, CLOSE } = EOpeningHoursTimeType;

/**
 * @description
 *
 * Days are out of order
 * (DB should ensure this never happens - remove this if it is unrealistic)
 */
export const edgeF3 = {
  monday: [],
  thursday: [
    { type: OPEN, value: 36000 },
    { type: CLOSE, value: 64800 },
  ],
  tuesday: [
    { type: OPEN, value: 36000 },
    { type: CLOSE, value: 64800 },
  ],
  wednesday: [],

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
    {
      type: CLOSE,
      value: 82800,
    },
  ],
  friday: [
    {
      type: OPEN,
      value: 64800,
    },
  ],
  sunday: [
    { type: OPEN, value: 43200 },
    { type: CLOSE, value: 75600 },
  ],
};
