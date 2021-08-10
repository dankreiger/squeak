import { EOpeningHoursTimeType } from '@squeak-shared.enums';

const { OPEN, CLOSE } = EOpeningHoursTimeType;

/**
 * @description
 *
 * Multiple open/close saturday dates
 *
 * and friday/saturday & saturday/sunday hours overlap
 */
export const edgeF0 = {
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
    {
      type: CLOSE,
      value: 82800,
    },
  ],
  sunday: [
    { type: OPEN, value: 43200 },
    { type: CLOSE, value: 75600 },
  ],
};
