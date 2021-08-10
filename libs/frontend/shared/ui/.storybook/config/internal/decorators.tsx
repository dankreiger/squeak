import { ELocale, i18n } from '@squeak-frontend/shared.i18n';
import { ALL_THEMES, EThemeMode, Theme } from '../../../src/lib/internal';

type TStoryBookParams = {
  globals: { locale: ELocale; theme: EThemeMode };
};

export const decorators = [
  // withTests({ results }),
  (
    Story: () => JSX.Element,
    { globals: { locale, theme } }: TStoryBookParams
  ) => {
    i18n.changeLanguage(locale as ELocale);
    return (
      <Theme theme={ALL_THEMES[theme]}>
        <Story />
      </Theme>
    );
  },
];
