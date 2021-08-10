import { EThemeMode } from './enums';
import { TAllThemes } from './types';
import { themeV0 } from './v0';
import { themeV1 } from './v1';
import { themeV2 } from './v2';

export * from './enums';
export * from './interfaces';
export * from './provider';
export const ALL_THEMES: TAllThemes = {
  [EThemeMode.V0]: themeV0,
  [EThemeMode.V1]: themeV1,
  [EThemeMode.V2]: themeV2,
};
