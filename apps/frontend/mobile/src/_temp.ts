import i18n from 'i18next';
import { DateTime } from 'luxon';
import { initReactI18next } from 'react-i18next';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
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
      en: {
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

          Open_24_Hours: 'Open 24 Hours',
          Closed: 'Closed',
        },
      },
      de: {
        translation: {
          counter: 'Changed language just once',
          counter_plural: 'Changed language already {{count}} times',
          footer: {
            date: 'Heute ist {{date, DATE_HUGE}}',
          },
          not_found: 'Nicht gefunden',

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

export default i18n;

export const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' },
};
