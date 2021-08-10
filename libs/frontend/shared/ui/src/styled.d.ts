import 'styled-components';
import { EThemeMode, IColors, ITypography, TBreakpointDict } from './lib';

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly mode: EThemeMode;
    readonly colors: IColors;
    readonly breakpoints: [0, 768, 968, 1024, 1800];
    readonly breakpointsMap: TBreakpointDict;
    readonly typography: ITypography;
  }
}
