import _i18n from 'i18next';
import { DateTime } from 'luxon';
import { initReactI18next } from 'react-i18next';
import { ELocale } from '../enums';

_i18n

  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format: (value, format, lng) => {
        if (value instanceof Date && typeof format === 'string') {
          return DateTime.fromJSDate(value)
            .setLocale(lng || 'en')
            .toLocaleString(
              (DateTime as any)[format] as Intl.DateTimeFormatOptions
            );
        }
        return value;
      },
    },
    resources: {
      [ELocale.enUS]: {
        translation: {
          description: {
            part1: 'Edit <1>src/App.js</1> and save to reload.',
            part2: 'Learn React',
          },
          counter: 'Changed language just once',
          counter_plural: 'Changed language already {{count}} times',
          footer: {
            date: 'Today is {{date, DATE_HUGE}}',
          },
          not_found: 'Not found',

          app_header: {
            logo: 'Dog Food',
          },
          mobile_close_button: {
            text: 'Close',
          },
          panel: {
            opening_times_header: 'Opening Times',
          },
          storybook: {
            test: 'Hello',
          },
          Open_24_Hours: 'Open 24 Hours',
          Closed: 'Closed',
        },
      },
      [ELocale.deDE]: {
        translation: {
          counter: 'Changed language just once',
          counter_plural: 'Changed language already {{count}} times',
          footer: {
            date: 'Heute ist {{date, DATE_HUGE}}',
          },
          not_found: 'Nicht gefunden',
          storybook: {
            test: 'Hallo',
          },
          app_header: {
            logo: 'Hundefutter',
          },
          mobile_close_button: {
            text: 'Schließen',
          },
          panel: {
            opening_times_header: 'Öffnungszeiten',
          },

          Open_24_Hours: 'offen 24 Stunden',
          Closed: 'Geschlossen',
        },
      },
      [ELocale.fiFI]: {
        translation: {
          counter: 'Changed language just once',
          counter_plural: 'Changed language already {{count}} times',
          footer: {
            date: 'Tänään on {{date, DATE_HUGE}}',
          },
          not_found: 'Nicht gefunden',
          storybook: {
            test: 'Hello in Finnish',
          },
          app_header: {
            logo: 'Hundefutter',
          },
          mobile_close_button: {
            text: 'Schließen',
          },
          panel: {
            opening_times_header: 'Öffnungszeiten',
          },

          Open_24_Hours: 'offen 24 Stunden',
          Closed: 'Geschlossen',
        },
      },
    },
  });

export const i18n = _i18n;

export const lngs = {
  [ELocale.enUS]: { nativeName: 'English' },
  [ELocale.deDE]: { nativeName: 'Deutsch' },
  [ELocale.fiFI]: { nativeName: 'Deutsch' },
};
