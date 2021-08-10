import { EOpeningHoursTimeType } from '@squeak-shared.enums';

const { OPEN, CLOSE } = EOpeningHoursTimeType;
export const realisticF0 = {
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
  friday: [{ type: OPEN, value: 36000 }],
  saturday: [
    { type: CLOSE, value: 3600 },
    { type: OPEN, value: 36000 },
  ],
  sunday: [
    { type: CLOSE, value: 3600 },
    { type: OPEN, value: 43200 },
    { type: CLOSE, value: 75600 },
  ],
};
