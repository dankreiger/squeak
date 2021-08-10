import 'styled-components';
import { EThemeMode, IColors } from './lib';

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly mode: EThemeMode;
    readonly colors: IColors;
    readonly typography: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  }
}
