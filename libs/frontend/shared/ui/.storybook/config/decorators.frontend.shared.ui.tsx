import { i18n } from '@squeak-frontend/shared.i18n';
import { ELocale } from '@squeak-shared.enums';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ALL_THEMES, EThemeMode, ThemeGlobalSt } from '../../src/lib';
type TStoryBookParams = {
  globals: { locale: ELocale; theme: EThemeMode };
};
export const decorators = [
  // withTests({ results }),
  (
    Story: () => JSX.Element,
    { globals: { locale, theme } }: TStoryBookParams
  ) => {
    useEffect(() => {
      i18n.changeLanguage(locale as ELocale);
    }, [locale]);

    return (
      <ThemeProvider theme={ALL_THEMES[theme]}>
        <ThemeGlobalSt />
        <Story />
      </ThemeProvider>
    );
  },
];
