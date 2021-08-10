import { EColor } from '../enums';
const palette = {
  [EColor.TEXT]: {
    hex: '#000',
    rgb: 'rgb(0,0,0)',
  },
  [EColor.BACKGROUND]: {
    hex: '#fff',
    rgb: 'rgb(255,255,255)',
  },
  [EColor.PRIMARY]: {
    hex: '#000',
    rgb: 'rgb(0,0,0)',
  },
  [EColor.SECONDARY]: {
    hex: '#3f3f3f',
    rgb: 'rgb(63,63,63)',
  },
  [EColor.HIGHLIGHT]: {
    hex: '#9f9f9f',
    rgb: 'rgb(159,159,159)',
  },
  [EColor.MUTED]: {
    hex: '#e0e0e0',
    rgb: 'rgb(224,224,224)',
  },
  [EColor.WHITE]: {
    hex: '#FFFFFF',
    rgb: 'rgb(255, 255, 255)',
  },
};

export const colorsV2 = {
  text: palette[EColor.TEXT].hex,
  background: palette[EColor.BACKGROUND].hex,
  primary: palette[EColor.PRIMARY].hex,
  secondary: palette[EColor.SECONDARY].hex,
  highlight: palette[EColor.HIGHLIGHT].hex,
  white: palette[EColor.WHITE].hex,
  muted: palette[EColor.MUTED].hex,
};
