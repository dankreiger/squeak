import { breakpointsMapV2, breakpointsV2 } from '../../breakpoints';
import { colorsV2 } from '../../colors';
import { typographyV2 } from '../../typography';
import { EThemeMode } from '../enums';
import type { ITheme } from '../interfaces';

export const themeV2: ITheme = {
  mode: EThemeMode.V2,
  colors: colorsV2,
  breakpoints: breakpointsV2,
  breakpointsMap: breakpointsMapV2,
  typography: typographyV2,
};
