import { breakpointsMapV1, breakpointsV1 } from '../../breakpoints';
import { colorsV1 } from '../../colors';
import { typographyV1 } from '../../typography';
import { EThemeMode } from '../enums';
import { ITheme } from '../interfaces';

export const themeV1: ITheme = {
  mode: EThemeMode.V1,
  colors: colorsV1,
  breakpoints: breakpointsV1,
  breakpointsMap: breakpointsMapV1,
  typography: typographyV1,
};
