import { DefaultTheme } from 'styled-components';
import { colorsV1 } from '../../colors';
import { typographyV1 } from '../../typography';
import { EThemeMode } from '../enums';

export const themeV1: DefaultTheme = {
  mode: EThemeMode.V1,
  colors: colorsV1,
  typography: typographyV1,
};
