import { EOpeningHoursTimeType } from '@squeak-shared.enums';

const { OPEN, CLOSE } = EOpeningHoursTimeType;

/**
 * @description
 *
 * Restaurant open for over 24 hours (Friday to early Sunday at 1am)
 */
export const edgeF2 = {
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
  saturday: [],
  sunday: [
    {
      type: CLOSE,
      value: 3600,
    },
    { type: OPEN, value: 20000 },
    { type: CLOSE, value: 75600 },
  ],
};
