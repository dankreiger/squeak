import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

export interface IThemeProps {
  /**
   * Wrapped child components
   */
  children: ReactNode;
  /**
   * Theme object from currently available themes ('v0', 'v1', 'v2')
   */
  theme: DefaultTheme;
}
