import { ELocale } from '@squeak-shared.enums';
import { resources } from './config';

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources[ELocale.enUS];
  }
}
