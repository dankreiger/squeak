import { EDayOfWeek, ELocale } from '@squeak-shared.enums';
import { I_I18nResource } from '../../interfaces';

const fiDayOfWeek = {
  monday: 'Maanantai',
  tuesday: 'Tiistai',
  wednesday: 'Keskiviikko',
  thursday: 'Torstai',
  friday: 'Perjantai',
  saturday: 'Lauantai',
  sunday: 'Sunnuntai',
};

const dayList = Object.values(EDayOfWeek);
export const fiFI: I_I18nResource = {
  translation: {
    // data related
    today: 'Tänään',
    open_24_hours: 'Auki 24 tuntia',
    closed: 'Suljettu',
    ...dayList.reduce((acc, cur) => {
      acc[cur] = fiDayOfWeek[cur];
      return acc;
    }, {} as Record<EDayOfWeek, string>),

    web: {
      app: {
        hocs: {
          dummyData: {
            error: 'Jotain meni pieleen.',
            no_data: 'Keine daten',
          },
        },
        pages: {
          home: {
            name: 'Kotisivu',
          },
          restaurants: {
            name: 'Restaurants',
            panel: {
              opening_hours_header: 'Aukioloajat',
            },
          },
          not_found: {
            name: 'Ei löydetty',
          },
        },
        components: {
          'app-header': {
            items: {
              'nav-items': {
                'language-options': {
                  [ELocale.enUS]: 'Englanti',
                  [ELocale.deDE]: 'Saksa',
                  [ELocale.fiFI]: 'Suomi',
                },
              },
            },
          },
          notice: {
            funny: 'En kääntänyt tämän sivun tekstiä. <- I have no clue',
          },
        },
      },
      ui: {
        components: {
          organisms: {
            header: {
              helpers: {
                'burger-menu': {
                  trigger: 'Avaa Mobiilivalikko',
                },
                'mobile-header-overlay': {
                  'close-button': 'Kiinni',
                },
              },
            },
          },
        },
        layouts: {
          page: {
            footer: {
              date: 'Tänään on {{date, DATE_HUGE}}',
            },
          },
        },
      },
    },
  },
};
