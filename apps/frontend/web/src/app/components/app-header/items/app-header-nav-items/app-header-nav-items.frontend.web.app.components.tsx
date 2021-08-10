import { useSqueakThemeContext } from '@squeak-frontend/shared.ui';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { AppHeaderDropdown } from '../app-header-dropdown';
import { AppHeaderNavLinksWrapper } from './app-header-nav-items.frontend.web.app.components.css';
import { useNavItems } from './hooks';

export const AppHeaderNavLinks = () => {
  const { currentTheme, setCurrentTheme } = useSqueakThemeContext();

  const { i18n } = useTranslation();

  const handleChangeLanguage = useCallback(
    (e) => i18n.changeLanguage(e.target.value),
    [i18n]
  );
  const handleChangeTheme = useCallback(
    (e) => setCurrentTheme(e.target.value),
    [setCurrentTheme]
  );

  const { languageOptions, themeOptions } = useNavItems({
    language: i18n.language,
    theme: currentTheme,
  });

  return (
    <AppHeaderNavLinksWrapper>
      <AppHeaderDropdown
        value={currentTheme}
        onChange={handleChangeTheme}
        items={themeOptions}
      />
      <AppHeaderDropdown
        onChange={handleChangeLanguage}
        items={languageOptions}
        value={i18n.language}
      />
    </AppHeaderNavLinksWrapper>
  );
};
