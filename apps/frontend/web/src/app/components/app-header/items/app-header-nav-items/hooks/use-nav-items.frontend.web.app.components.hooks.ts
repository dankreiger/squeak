import { EThemeMode } from '@squeak-frontend/shared.ui';
import { webi18n } from '@squeak-frontend/web.i18n';
import { LANG_LIST } from '@squeak-shared.constants';
import { ELocale } from '@squeak-shared.enums';
import { useMemo } from 'react';
import { IAppHeaderNavItem } from '../types';

const prefix = 'web.app.components.app-header.items.nav-items';
const ___ = new Map();
const themeList = Object.values(EThemeMode);
const xfLangs = (locale: ELocale) => ({
  value: locale,
  text: webi18n.t(`${prefix}.language-options.${locale}`),
});

const xfThemes = (mode: EThemeMode) => ({
  value: mode,
  text: mode,
});

export const useNavItems = (opts: { language: string; theme: EThemeMode }) => {
  const { language, theme } = opts;

  const languageOptions = useMemo<IAppHeaderNavItem<ELocale, string>[]>(() => {
    const cache = ___.get(language);
    if (cache) return cache;

    ___.set(language, LANG_LIST.map(xfLangs));
    return ___.get(language);
  }, [language]);

  const themeOptions = useMemo<
    IAppHeaderNavItem<EThemeMode, EThemeMode>[]
  >(() => {
    const cache = ___.get(theme);
    if (cache) return cache;

    const newOptions = themeList.map(xfThemes);
    ___.set(theme, newOptions);
    return ___.get(theme);
  }, [theme]);

  return { languageOptions, themeOptions };
};
