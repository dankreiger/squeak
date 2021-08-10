import { EDayOfWeek, ELocale } from '@squeak-shared.enums';
import { I_I18nResource } from '../../interfaces';

const deDayOfWeek = {
  monday: 'Montag',
  tuesday: 'Dienstag',
  wednesday: 'Mittwoch',
  thursday: 'Donnerstag',
  friday: 'Freitag',
  saturday: 'Samstag',
  sunday: 'Sonntag',
};
export const deDE: I_I18nResource = {
  translation: {
    // data related
    ...Object.values(EDayOfWeek).reduce((acc, cur) => {
      acc[cur] = deDayOfWeek[cur];
      return acc;
    }, {} as Record<EDayOfWeek, string>),
    today: 'Heute',
    open_24_hours: 'offen 24 Stunden',
    closed: 'Geschlossen',

    // domain specific
    web: {
      app: {
        hocs: {
          dummyData: {
            error: 'Etwas ist schiefgelaufen',
            no_data: 'Keine daten',
          },
        },
        pages: {
          home: {
            name: 'Startseite',
          },
          restaurants: {
            name: 'Restaurants',
            panel: {
              opening_hours_header: 'Öffnungszeiten',
            },
          },
          not_found: {
            name: 'Nicht gefunden',
          },
        },
        components: {
          'app-header': {
            items: {
              'nav-items': {
                'language-options': {
                  [ELocale.enUS]: 'Englisch',
                  [ELocale.deDE]: 'Deutsch',
                  [ELocale.fiFI]: 'Finnisch',
                },
              },
            },
          },
          notice: {
            funny: 'Auf dieser Seite habe ich leider nichts übersetzt.',
          },
        },
      },
      ui: {
        components: {
          organisms: {
            header: {
              helpers: {
                'burger-menu': {
                  trigger: 'Mobile-Menu öffnen',
                },
                'mobile-header-overlay': {
                  'close-button': 'Schließen',
                },
              },
            },
          },
        },
        layouts: {
          page: {
            footer: {
              date: 'Heute ist {{date, DATE_HUGE}}',
            },
          },
        },
      },
    },
  },
};
