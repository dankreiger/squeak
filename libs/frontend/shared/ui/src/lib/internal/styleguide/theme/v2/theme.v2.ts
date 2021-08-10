import { DefaultTheme } from 'styled-components';
import { colorsV2 } from '../../colors';
import { typographyV2 } from '../../typography';
import { EThemeMode } from '../enums';

export const themeV2: DefaultTheme = {
  mode: EThemeMode.V2,
  colors: colorsV2,
  typography: typographyV2,
};
