import { EOpeningHoursTimeType } from '@squeak-shared.enums';

const { OPEN, CLOSE } = EOpeningHoursTimeType;
export const realisticF1 = {
  monday: [
    { value: 32400, type: OPEN },
    { value: 74180, type: CLOSE },
  ],
  tuesday: [
    { type: OPEN, value: 36026 },
    { type: CLOSE, value: 53940 },
    { value: 61300, type: OPEN },
    { value: 78652, type: CLOSE },
  ],
  wednesday: [
    { value: 32585, type: OPEN },
    { value: 79394, type: CLOSE },
  ],
  thursday: [
    { value: 36218, type: OPEN },
    { value: 65025, type: CLOSE },
  ],
  friday: [{ value: 4048, type: OPEN }],
  saturday: [{ type: CLOSE, value: 4753 }],
  sunday: [],
};
