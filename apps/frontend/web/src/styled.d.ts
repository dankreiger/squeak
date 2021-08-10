import { EThemeMode, IColors } from '@squeak-frontend/shared.ui';
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    readonly mode: EThemeMode;
    readonly colors: IColors;
    readonly typography: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  }
}
