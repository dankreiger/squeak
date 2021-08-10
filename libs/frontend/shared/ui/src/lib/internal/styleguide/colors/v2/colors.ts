import { EColor } from '../enums';

const palette = {
  [EColor.TEXT]: {
    hex: '#2d3748',
    rgb: 'rgb(45,55,72)',
  },
  [EColor.BACKGROUND]: {
    hex: '#FFFFFF',
    rgb: 'rgb(255, 255, 255)',
  },
  [EColor.PRIMARY]: {
    hex: '#2b6cb0',
    rgb: 'rgb(43,108,176)',
  },

  [EColor.SECONDARY]: {
    hex: '#718096',
    rgb: 'rgb(113,128,150)',
  },
  [EColor.HIGHLIGHT]: {
    hex: '#9ae6b4',
    rgb: 'rgb(154,230,180)',
  },
  [EColor.MUTED]: {
    hex: '#e2e8f0',
    rgb: 'rgb(226,232,240)',
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
