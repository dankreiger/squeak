import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITheme extends DefaultTheme {}

export interface IThemeProps {
  /**
   * Wrapped child components
   */
  children: ReactNode;
  /**
   * Theme object from currently available themes ('v0', 'v1', 'v2')
   */
  theme: ITheme;
}
