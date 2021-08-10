import { ELocale } from '@squeak-shared.enums';
import { EThemeMode } from '../../src/lib/internal';
export const sbGlobals = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: EThemeMode.V0,
    toolbar: {
      icon: 'paintbrush',
      items: Object.values(EThemeMode),
    },
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: ELocale.enUS,
    toolbar: {
      icon: 'globe',
      items: [
        { value: ELocale.enUS, right: '🇺🇸', title: 'English' },
        { value: ELocale.deDE, right: '🇩🇪', title: 'Deutsch' },
        { value: ELocale.fiFI, right: '🇫🇮', title: 'Suomi' },
      ],
    },
  },
};
