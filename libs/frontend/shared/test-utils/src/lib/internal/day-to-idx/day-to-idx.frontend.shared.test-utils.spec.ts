import { EDayOfWeek } from '@squeak-shared.enums';
import { dayToIdx } from './day-to-idx.frontend.shared.test-utils';

describe('dayToIdx', () => {
  it('maps the name of a day to its index in an array of days', () => {
    Object.values(EDayOfWeek).forEach((day, index) => {
      expect(dayToIdx[day]).toEqual(index);
    });
  });
});
