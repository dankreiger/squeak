import { EOpeningHoursTimeType } from '@squeak-shared.enums';

const { OPEN, CLOSE } = EOpeningHoursTimeType;
/**
 * closed for 2 consecutive days
 */
export const realisticF2 = {
  monday: [
    { value: 32400, type: OPEN },
    { value: 74180, type: CLOSE },
  ],
  tuesday: [],
  wednesday: [],
  thursday: [
    { value: 36218, type: OPEN },
    { value: 65025, type: CLOSE },
  ],
  friday: [{ value: 4048, type: OPEN }],
  saturday: [{ value: 4753, type: CLOSE }],
  sunday: [],
};
