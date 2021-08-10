import '@squeak-frontend/shared.i18n';
import { dayToIdx } from '@squeak-frontend/shared.test-utils';
import { FIXTURES } from '@squeak-shared.fixtures';
import { getUIOpeningHours } from './opening-hours.frontend.shared.utils';

const {
  OPENING_HOURS: { edge, realistic },
} = FIXTURES();

/**
 * @note
 *
 * keeping output data purposefully verbose
 *
 * so we can handle more edge cases using meta data
 *
 * e.g. a time open between 24 and 48 hours
 *      might need to know the actual type of the opening hour
 *      counting odd and even amounts of opening hours is not enough
 *      to handle this type of edge case
 */

describe('OpeningHours', () => {
  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } =
    dayToIdx;
  describe('realistic examples', () => {
    it('outputs readable opening hours (realistic.f0)', () => {
      const fixture = realistic.f0;
      const result = getUIOpeningHours(fixture);

      expect(result[monday]).toEqual([
        'monday',
        [
          {
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
            type: 'closed_all_day',
            value: null,
          },
        ],
      ]);
      expect(result[tuesday]).toEqual([
        'tuesday',
        [
          {
            type: 'open',
            value: 36000,
            display: {
              'de-DE': '10 Uhr',
              'en-US': '10 AM',
              'fi-FI': '10',
            },
          },
          {
            type: 'close',
            value: 64800,
            display: {
              'de-DE': '18 Uhr',
              'en-US': '6 PM',
              'fi-FI': '18',
            },
          },
        ],
      ]);

      expect(result[wednesday]).toEqual([
        'wednesday',
        [
          {
            type: 'closed_all_day',
            value: null,
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
          },
        ],
      ]);
      expect(result[thursday]).toEqual([
        'thursday',
        [
          {
            type: 'open',
            value: 36000,
            display: {
              'de-DE': '10 Uhr',
              'en-US': '10 AM',
              'fi-FI': '10',
            },
          },
          {
            type: 'close',
            value: 64800,
            display: {
              'de-DE': '18 Uhr',
              'en-US': '6 PM',
              'fi-FI': '18',
            },
          },
        ],
      ]);

      expect(result[friday]).toEqual([
        'friday',
        [
          {
            type: 'open',
            value: 36000,
            display: {
              'de-DE': '10 Uhr',
              'en-US': '10 AM',
              'fi-FI': '10',
            },
          },
          {
            type: 'close',
            value: 3600,
            display: {
              'de-DE': '1 Uhr',
              'en-US': '1 AM',
              'fi-FI': '1',
            },
          },
        ],
      ]);

      expect(result[saturday]).toEqual([
        'saturday',
        [
          {
            type: 'open',
            value: 36000,
            display: {
              'de-DE': '10 Uhr',
              'en-US': '10 AM',
              'fi-FI': '10',
            },
          },
          {
            type: 'close',
            value: 3600,
            display: {
              'de-DE': '1 Uhr',
              'en-US': '1 AM',
              'fi-FI': '1',
            },
          },
        ],
      ]);
      expect(result[sunday]).toEqual([
        'sunday',
        [
          {
            type: 'open',
            value: 43200,
            display: {
              'de-DE': '12 Uhr',
              'en-US': '12 PM',
              'fi-FI': '12',
            },
          },
          {
            type: 'close',
            value: 75600,
            display: {
              'de-DE': '21 Uhr',
              'en-US': '9 PM',
              'fi-FI': '21',
            },
          },
        ],
      ]);
    });

    it('outputs readable opening hours (realistic.f1)', () => {
      const fixture = realistic.f1;
      const result = getUIOpeningHours(fixture);

      expect(result[monday]).toEqual([
        'monday',
        [
          {
            type: 'open',
            value: 32400,

            display: {
              'de-DE': '9 Uhr',
              'en-US': '9 AM',
              'fi-FI': '9',
            },
          },
          {
            type: 'close',
            value: 74180,
            display: {
              'de-DE': '20:36',
              'en-US': '8:36 PM',
              'fi-FI': '20.36',
            },
          },
        ],
      ]);
      expect(result[tuesday]).toEqual([
        'tuesday',
        [
          {
            type: 'open',
            value: 36026,
            display: {
              'de-DE': '10 Uhr',
              'en-US': '10 AM',
              'fi-FI': '10',
            },
          },
          {
            type: 'close',
            value: 53940,
            display: {
              'de-DE': '14:59',
              'en-US': '2:59 PM',
              'fi-FI': '14.59',
            },
          },
          {
            display: {
              'de-DE': '17:01',
              'en-US': '5:01 PM',
              'fi-FI': '17.01',
            },
            type: 'open',
            value: 61300,
          },
          {
            display: {
              'de-DE': '21:50',
              'en-US': '9:50 PM',
              'fi-FI': '21.50',
            },
            type: 'close',
            value: 78652,
          },
        ],
      ]);

      expect(result[wednesday]).toEqual([
        'wednesday',
        [
          {
            display: {
              'de-DE': '9:03',
              'en-US': '9:03 AM',
              'fi-FI': '9.03',
            },
            type: 'open',
            value: 32585,
          },
          {
            display: {
              'de-DE': '22:03',
              'en-US': '10:03 PM',
              'fi-FI': '22.03',
            },
            type: 'close',
            value: 79394,
          },
        ],
      ]);
      expect(result[thursday]).toEqual([
        'thursday',
        [
          {
            type: 'open',
            value: 36218,
            display: {
              'de-DE': '10:03',
              'en-US': '10:03 AM',
              'fi-FI': '10.03',
            },
          },
          {
            type: 'close',
            value: 65025,
            display: {
              'de-DE': '18:03',
              'en-US': '6:03 PM',
              'fi-FI': '18.03',
            },
          },
        ],
      ]);

      // crossover day check
      expect(Object.entries(fixture)[friday]).toEqual([
        'friday',
        [{ type: 'open', value: 4048 }],
      ]);
      expect(result[friday]).toEqual([
        'friday',
        [
          {
            type: 'open',
            value: 4048,
            display: {
              'de-DE': '1:07',
              'en-US': '1:07 AM',
              'fi-FI': '1.07',
            },
          },
          {
            type: 'close',
            value: 4753,
            display: {
              'de-DE': '1:19',
              'en-US': '1:19 AM',
              'fi-FI': '1.19',
            },
          },
        ],
      ]);
      expect(result[saturday]).toEqual([
        'saturday',
        [
          {
            type: 'closed_all_day',
            value: null,
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
          },
        ],
      ]);
      expect(result[sunday]).toEqual([
        'sunday',
        [
          {
            type: 'closed_all_day',
            value: null,
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
          },
        ],
      ]);
    });

    it('outputs readable opening hours (realistic.f2)', () => {
      const fixture = realistic.f2;
      const result = getUIOpeningHours(fixture);

      expect(result[monday]).toEqual([
        'monday',
        [
          {
            type: 'open',
            value: 32400,
            display: {
              'de-DE': '9 Uhr',
              'en-US': '9 AM',
              'fi-FI': '9',
            },
          },
          {
            type: 'close',
            value: 74180,
            display: {
              'de-DE': '20:36',
              'en-US': '8:36 PM',
              'fi-FI': '20.36',
            },
          },
        ],
      ]);
      expect(result[tuesday]).toEqual([
        'tuesday',
        [
          {
            type: 'closed_all_day',
            value: null,
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
          },
        ],
      ]);

      expect(result[wednesday]).toEqual([
        'wednesday',
        [
          {
            type: 'closed_all_day',
            value: null,
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
          },
        ],
      ]);
      expect(result[thursday]).toEqual([
        'thursday',
        [
          {
            type: 'open',
            value: 36218,
            display: {
              'de-DE': '10:03',
              'en-US': '10:03 AM',
              'fi-FI': '10.03',
            },
          },
          {
            type: 'close',
            value: 65025,
            display: {
              'de-DE': '18:03',
              'en-US': '6:03 PM',
              'fi-FI': '18.03',
            },
          },
        ],
      ]);

      // crossover day check
      expect(Object.entries(fixture)[friday]).toEqual([
        'friday',
        [{ type: 'open', value: 4048 }],
      ]);
      expect(result[friday]).toEqual([
        'friday',
        [
          {
            type: 'open',
            value: 4048,
            display: {
              'de-DE': '1:07',
              'en-US': '1:07 AM',
              'fi-FI': '1.07',
            },
          },
          {
            type: 'close',
            value: 4753,
            display: {
              'de-DE': '1:19',
              'en-US': '1:19 AM',
              'fi-FI': '1.19',
            },
          },
        ],
      ]);
      // crossover day check
      expect(Object.entries(fixture)[saturday]).toEqual([
        'saturday',
        [{ type: 'close', value: 4753 }],
      ]);
      expect(result[saturday]).toEqual([
        'saturday',
        [
          {
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
            type: 'closed_all_day',
            value: null,
          },
        ],
      ]);
      expect(result[sunday]).toEqual([
        'sunday',
        [
          {
            type: 'closed_all_day',
            value: null,
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
          },
        ],
      ]);
    });
  });

  describe('edge case examples', () => {
    it('outputs readable opening hours (edge.f0)', () => {
      /**
       * @description
       *
       * Multiple open/close saturday dates
       *
       * and friday/saturday & saturday/sunday hours overlap
       */
      const fixture = edge.f0;
      const result = getUIOpeningHours(fixture);

      expect(result[monday]).toEqual([
        'monday',
        [
          {
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
            type: 'closed_all_day',
            value: null,
          },
        ],
      ]);
      expect(result[tuesday]).toEqual([
        'tuesday',
        [
          {
            type: 'open',
            value: 36000,
            display: {
              'de-DE': '10 Uhr',
              'en-US': '10 AM',
              'fi-FI': '10',
            },
          },
          {
            type: 'close',
            value: 64800,
            display: {
              'de-DE': '18 Uhr',
              'en-US': '6 PM',
              'fi-FI': '18',
            },
          },
        ],
      ]);

      expect(result[wednesday]).toEqual([
        'wednesday',
        [
          {
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
            type: 'closed_all_day',
            value: null,
          },
        ],
      ]);
      expect(result[thursday]).toEqual([
        'thursday',
        [
          {
            type: 'open',
            value: 36000,
            display: {
              'de-DE': '10 Uhr',
              'en-US': '10 AM',
              'fi-FI': '10',
            },
          },
          {
            type: 'close',
            value: 64800,
            display: {
              'de-DE': '18 Uhr',
              'en-US': '6 PM',
              'fi-FI': '18',
            },
          },
        ],
      ]);

      // crossover day check
      expect(Object.entries(fixture)[friday]).toEqual([
        'friday',
        [{ type: 'open', value: 64800 }],
      ]);
      expect(result[friday]).toEqual([
        'friday',
        [
          {
            type: 'open',
            value: 64800,
            display: {
              'de-DE': '18 Uhr',
              'en-US': '6 PM',
              'fi-FI': '18',
            },
          },
          {
            display: {
              'de-DE': '1 Uhr',
              'en-US': '1 AM',
              'fi-FI': '1',
            },
            type: 'close',
            value: 3600,
          },
        ],
      ]);

      expect(result[saturday]).toEqual([
        'saturday',
        [
          {
            type: 'open',
            value: 32400,
            display: {
              'de-DE': '9 Uhr',
              'en-US': '9 AM',
              'fi-FI': '9',
            },
          },
          {
            type: 'close',
            value: 39600,
            display: {
              'de-DE': '11 Uhr',
              'en-US': '11 AM',
              'fi-FI': '11',
            },
          },
          {
            type: 'open',
            value: 57600,
            display: {
              'de-DE': '16 Uhr',
              'en-US': '4 PM',
              'fi-FI': '16',
            },
          },
          {
            type: 'close',
            value: 82800,
            display: {
              'de-DE': '23 Uhr',
              'en-US': '11 PM',
              'fi-FI': '23',
            },
          },
        ],
      ]);
      expect(result[sunday]).toEqual([
        'sunday',
        [
          {
            type: 'open',
            value: 43200,
            display: {
              'de-DE': '12 Uhr',
              'en-US': '12 PM',
              'fi-FI': '12',
            },
          },
          {
            type: 'close',
            value: 75600,
            display: {
              'de-DE': '21 Uhr',
              'en-US': '9 PM',
              'fi-FI': '21',
            },
          },
        ],
      ]);
    });

    it('outputs readable opening hours (edge.f1)', () => {
      /**
       * @description
       *
       * Restaurant closes at midnight, and opens one hour later (see sunday)
       */
      const fixture = edge.f1;
      const result = getUIOpeningHours(fixture);

      expect(result[monday]).toEqual([
        'monday',
        [
          {
            type: 'closed_all_day',
            value: null,
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
          },
        ],
      ]);
      expect(result[tuesday]).toEqual([
        'tuesday',
        [
          {
            type: 'open',
            value: 36000,
            display: {
              'de-DE': '10 Uhr',
              'en-US': '10 AM',
              'fi-FI': '10',
            },
          },
          {
            type: 'close',
            value: 64800,
            display: {
              'de-DE': '18 Uhr',
              'en-US': '6 PM',
              'fi-FI': '18',
            },
          },
        ],
      ]);

      expect(result[wednesday]).toEqual([
        'wednesday',
        [
          {
            type: 'closed_all_day',
            value: null,
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
          },
        ],
      ]);
      expect(result[thursday]).toEqual([
        'thursday',
        [
          {
            type: 'open',
            value: 36000,
            display: {
              'de-DE': '10 Uhr',
              'en-US': '10 AM',
              'fi-FI': '10',
            },
          },
          {
            type: 'close',
            value: 64800,
            display: {
              'de-DE': '18 Uhr',
              'en-US': '6 PM',
              'fi-FI': '18',
            },
          },
        ],
      ]);

      // crossover day check
      expect(Object.entries(fixture)[friday]).toEqual([
        'friday',
        [{ type: 'open', value: 64800 }],
      ]);
      expect(result[friday]).toEqual([
        'friday',
        [
          {
            type: 'open',
            value: 64800,
            display: {
              'de-DE': '18 Uhr',
              'en-US': '6 PM',
              'fi-FI': '18',
            },
          },
          {
            type: 'close',
            value: 3600,
            display: {
              'de-DE': '1 Uhr',
              'en-US': '1 AM',
              'fi-FI': '1',
            },
          },
        ],
      ]);
      expect(result[saturday]).toEqual([
        'saturday',
        [
          {
            display: {
              'de-DE': '9 Uhr',
              'en-US': '9 AM',
              'fi-FI': '9',
            },
            type: 'open',
            value: 32400,
          },
          {
            display: {
              'de-DE': '11 Uhr',
              'en-US': '11 AM',
              'fi-FI': '11',
            },
            type: 'close',
            value: 39600,
          },
          {
            display: {
              'de-DE': '16 Uhr',
              'en-US': '4 PM',
              'fi-FI': '16',
            },
            type: 'open',
            value: 57600,
          },
          {
            display: {
              'de-DE': '0 Uhr',
              'en-US': '12 AM',
              'fi-FI': '', // todo why is this blank in Finnish?
            },
            type: 'close',
            value: 0,
          },
        ],
      ]);
      expect(result[sunday]).toEqual([
        'sunday',
        [
          {
            display: {
              'de-DE': '1 Uhr',
              'en-US': '1 AM',
              'fi-FI': '1',
            },
            type: 'open',
            value: 3600,
          },
          {
            display: {
              'de-DE': '21 Uhr',
              'en-US': '9 PM',
              'fi-FI': '21',
            },
            type: 'close',
            value: 75600,
          },
        ],
      ]);
    });

    it('outputs readable opening hours (edge.f2)', () => {
      /**
       * @description
       *
       * Restaurant open for over 24 hours (Friday to early Sunday at 1am)
       */
      const fixture = edge.f2;
      const result = getUIOpeningHours(fixture);

      expect(result[monday]).toEqual([
        'monday',
        [
          {
            type: 'closed_all_day',
            value: null,
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
          },
        ],
      ]);
      expect(result[tuesday]).toEqual([
        'tuesday',
        [
          {
            type: 'open',
            value: 36000,
            display: {
              'de-DE': '10 Uhr',
              'en-US': '10 AM',
              'fi-FI': '10',
            },
          },
          {
            display: {
              'de-DE': '18 Uhr',
              'en-US': '6 PM',
              'fi-FI': '18',
            },
            type: 'close',
            value: 64800,
          },
        ],
      ]);

      expect(result[wednesday]).toEqual([
        'wednesday',
        [
          {
            type: 'closed_all_day',
            value: null,
            display: {
              'de-DE': 'Geschlossen',
              'en-US': 'Closed',
              'fi-FI': 'Suljettu',
            },
          },
        ],
      ]);
      expect(result[thursday]).toEqual([
        'thursday',
        [
          {
            type: 'open',
            value: 36000,
            display: {
              'de-DE': '10 Uhr',
              'en-US': '10 AM',
              'fi-FI': '10',
            },
          },
          {
            type: 'close',
            value: 64800,
            display: {
              'de-DE': '18 Uhr',
              'en-US': '6 PM',
              'fi-FI': '18',
            },
          },
        ],
      ]);

      expect(result[friday]).toEqual([
        'friday',
        [
          {
            type: 'open',
            value: 64800,
            display: {
              'de-DE': '18 Uhr',
              'en-US': '6 PM',
              'fi-FI': '18',
            },
          },
        ],
      ]);
      expect(result[saturday]).toEqual([
        'saturday',
        [
          {
            display: {
              'de-DE': 'offen 24 Stunden',
              'en-US': 'Open 24 Hours',
              'fi-FI': 'Auki 24 tuntia',
            },
            type: 'open_24_hours',
            value: null,
          },
        ],
      ]);
      expect(result[sunday]).toEqual([
        'sunday',
        [
          {
            display: {
              'de-DE': '1 Uhr',
              'en-US': '1 AM',
              'fi-FI': '1',
            },
            type: 'close',
            value: 3600,
          },
          {
            display: {
              'de-DE': '5:33',
              'en-US': '5:33 AM',
              'fi-FI': '5.33',
            },
            type: 'open',
            value: 20000,
          },
          {
            display: {
              'de-DE': '21 Uhr',
              'en-US': '9 PM',
              'fi-FI': '21',
            },
            type: 'close',
            value: 75600,
          },
        ],
      ]);
    });
  });
});
