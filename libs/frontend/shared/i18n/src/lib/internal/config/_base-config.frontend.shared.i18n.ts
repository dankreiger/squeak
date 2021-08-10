import { ELocale, ENodeEnv } from '@squeak-shared.enums';
import { InitOptions } from 'i18next';
import { DateTime } from 'luxon';
import { resources } from '../resources';

export const BASE_LANG = ELocale.enUS;

export const baseConfig: InitOptions = {
  debug: process.env.node_env === ENodeEnv.DEVELOPMENT,
  fallbackLng: BASE_LANG,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
    format: (value, format, lng) => {
      if (value instanceof Date && typeof format === 'string') {
        return DateTime.fromJSDate(value)
          .setLocale(lng || ELocale.enUS)
          .toLocaleString(
            (DateTime as any)[format] as Intl.DateTimeFormatOptions
          );
      }
      return value;
    },
  },
  resources,
};
