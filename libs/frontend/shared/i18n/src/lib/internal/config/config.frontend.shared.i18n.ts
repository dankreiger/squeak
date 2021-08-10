import _i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from '../resources';
import { baseConfig, BASE_LANG } from './_base-config.frontend.shared.i18n';

_i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(baseConfig);

type TExportedIntlConfig = typeof _i18n & { resources: typeof resources };
(_i18n as TExportedIntlConfig).resources = resources;

export const i18n = _i18n as TExportedIntlConfig;
export { BASE_LANG };
