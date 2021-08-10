import { EColor } from '../enums';

const palette = {
  [EColor.TEXT]: {
    hex: '#202125', // Black
    rgb: 'rgb(32, 33, 37)',
  },
  [EColor.BACKGROUND]: {
    // Grey 1
    hex: '#F8F8F8',
    rgb: 'rgb(248, 248, 248)',
  },
  [EColor.PRIMARY]: {
    // custom
    hex: '#009de0',
    rgb: 'rgb(0, 157, 224)',
  },

  [EColor.SECONDARY]: {
    // Grey 3
    hex: '#A1A2A4',
    rgb: 'rgb(161, 162, 164)',
  },
  [EColor.HIGHLIGHT]: {
    // Green
    hex: '#5BCB02',
    rgb: 'rgb(87, 204, 20)',
  },
  [EColor.MUTED]: {
    // Grey 2
    hex: '#EEEEEE',
    rgb: 'rgb(238, 238, 238)',
  },
  [EColor.WHITE]: {
    // White
    hex: '#FFFFFF',
    rgb: 'rgb(255, 255, 255)',
  },
};

export const colorsV0 = {
  text: palette[EColor.TEXT].hex,
  background: palette[EColor.BACKGROUND].hex,
  primary: palette[EColor.PRIMARY].hex,
  secondary: palette[EColor.SECONDARY].hex,
  highlight: palette[EColor.HIGHLIGHT].hex,
  white: palette[EColor.WHITE].hex,
  muted: palette[EColor.MUTED].hex,
};
