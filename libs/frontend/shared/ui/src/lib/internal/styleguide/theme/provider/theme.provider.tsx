import { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ALL_THEMES } from '..';
import { SqueakThemeContextProvider } from '../context';
import { EThemeMode } from '../enums';
import { ThemeGlobalSt } from './theme.provider.css';
/**
 * Wrapper theme that only accepts the UI library's current themes.
 */

export const SqueakThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<EThemeMode>(EThemeMode.V0);
  const themeState = { currentTheme, setCurrentTheme };
  const selectedTheme = ALL_THEMES[currentTheme];
  return (
    <SqueakThemeContextProvider value={themeState}>
      <ThemeProvider theme={selectedTheme}>
        <ThemeGlobalSt />
        {children}
      </ThemeProvider>
    </SqueakThemeContextProvider>
  );
};
