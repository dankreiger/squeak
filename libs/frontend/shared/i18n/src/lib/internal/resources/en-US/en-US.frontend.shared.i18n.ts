import { EDayOfWeek, ELocale } from '@squeak-shared.enums';
import type { I_I18nResource } from '../../interfaces';

const dayList = Object.values(EDayOfWeek);
export const enUS: I_I18nResource = {
  translation: {
    // data related
    today: 'Today',
    open_24_hours: 'Open 24 Hours',
    closed: 'Closed',
    ...dayList.reduce((acc, cur) => {
      acc[cur] = cur;
      return acc;
    }, {} as Record<EDayOfWeek, string>),

    // domain specific
    web: {
      app: {
        hocs: {
          dummyData: {
            error: 'Something went wrong',
            no_data: 'No data',
          },
        },
        pages: {
          home: {
            name: 'Home',
          },
          restaurants: {
            name: 'Restaurants',

            panel: {
              opening_hours_header: 'Opening Hours',
            },
          },
          not_found: {
            name: 'Not Found',
          },
        },
        components: {
          'app-header': {
            items: {
              'nav-items': {
                'language-options': {
                  [ELocale.enUS]: 'English',
                  [ELocale.deDE]: 'German',
                  [ELocale.fiFI]: 'Finnish',
                },
              },
            },
          },
          notice: {
            funny: 'I did not translate the text on this page',
          },
        },
      },
      ui: {
        components: {
          organisms: {
            header: {
              helpers: {
                'burger-menu': {
                  trigger: 'Open Mobile Menu',
                },
                'mobile-header-overlay': {
                  'close-button': 'Close',
                },
              },
            },
          },
        },
        layouts: {
          page: {
            footer: {
              date: 'Today is {{date, DATE_HUGE}}',
            },
          },
        },
      },
    },
  },
};
