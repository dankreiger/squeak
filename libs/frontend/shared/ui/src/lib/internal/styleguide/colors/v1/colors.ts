import { EColor } from '../enums';

const palette = {
  [EColor.TEXT]: {
    hex: '#000000', // Black
    rgb: 'rgb(0, 0, 0)',
  },
  [EColor.BACKGROUND]: {
    hex: '#FFFFFF',
    rgb: 'rgb(255, 255, 255)',
  },
  [EColor.PRIMARY]: {
    hex: '#3333ee',
    rgb: 'rgb(51, 51, 238)',
  },

  [EColor.SECONDARY]: {
    hex: '#111199',
    rgb: 'rgb(17, 17, 153)',
  },
  [EColor.HIGHLIGHT]: {
    hex: '#660099',
    rgb: 'rgb(102, 0, 153)',
  },
  [EColor.MUTED]: {
    hex: '#f6f6f6',
    rgb: 'rgb(246, 246, 246)',
  },
  [EColor.WHITE]: {
    hex: '#FFFFFF',
    rgb: 'rgb(255, 255, 255)',
  },
};

export const colorsV1 = {
  text: palette[EColor.TEXT].hex,
  background: palette[EColor.BACKGROUND].hex,
  primary: palette[EColor.PRIMARY].hex,
  secondary: palette[EColor.SECONDARY].hex,
  highlight: palette[EColor.HIGHLIGHT].hex,
  muted: palette[EColor.MUTED].hex,
  white: palette[EColor.WHITE].hex,
};
