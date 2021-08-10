import { i18n } from '@squeak-frontend/shared.i18n';
import BrowserLanguageDetector from 'i18next-browser-languagedetector';
i18n.use(BrowserLanguageDetector);

export const webi18n = i18n;
