import { ThemeProvider } from 'styled-components';
import type { IThemeProps } from '../interfaces';
import { ThemeGlobalSt } from './theme.provider.css';
/**
 * Wrapper theme that only accepts the UI library's current themes.
 */
export const Theme = ({ theme, children }: IThemeProps) => (
  <ThemeProvider theme={theme}>
    <ThemeGlobalSt />
    {children}
  </ThemeProvider>
);
