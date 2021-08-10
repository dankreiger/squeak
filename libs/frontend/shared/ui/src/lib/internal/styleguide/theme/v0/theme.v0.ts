import { breakpointsMapV0, breakpointsV0 } from '../../breakpoints';
import { colorsV0 } from '../../colors';
import { typographyV0 } from '../../typography';
import { EThemeMode } from '../enums';
import { ITheme } from '../interfaces';

export const themeV0: ITheme = {
  mode: EThemeMode.V0,
  colors: colorsV0,
  breakpoints: breakpointsV0,
  breakpointsMap: breakpointsMapV0,
  typography: typographyV0,
};
