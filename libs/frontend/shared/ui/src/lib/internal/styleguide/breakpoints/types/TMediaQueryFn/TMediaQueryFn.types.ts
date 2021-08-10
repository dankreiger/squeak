import { DefaultTheme, ThemedCssFunction } from 'styled-components';

export type TMediaQueryFn = (
  styles: string
) => ReturnType<ThemedCssFunction<DefaultTheme>>;
