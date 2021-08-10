import { EBreakpoint } from '../../breakpoints/enums';
import { EHeadingTag } from '../enums';
import { fontSizes } from './fontSizes';

const getHeadingStyles = Object.values(EHeadingTag).reduce((acc, cur, idx) => {
  acc[cur] = {
    [EBreakpoint.XS]: {
      fontSize: `${fontSizes[idx + 4]}px`,
    },
    [EBreakpoint.SM]: {
      margin: '0px',
      fontSize: `${fontSizes[idx + 3]}px`,
    },
    [EBreakpoint.MD]: {
      fontSize: `${fontSizes[idx + 2]}px`,
    },
    [EBreakpoint.LG]: {
      fontSize: `${fontSizes[idx + 1]}px`,
    },
    [EBreakpoint.XL]: {
      fontSize: `${fontSizes[idx]}px`,
    },
  };
  return acc;
}, {} as Record<EHeadingTag, Record<EBreakpoint, Record<string, string>>>);

export const typographyStyles = {
  ...getHeadingStyles,
  p: {
    [EBreakpoint.XS]: {
      margin: '0px',
      fontSize: `${fontSizes[fontSizes.length - 1]}px`,
    },
    [EBreakpoint.SM]: {
      fontSize: `${fontSizes[fontSizes.length - 1]}px`,
    },
    [EBreakpoint.MD]: {
      fontSize: `${fontSizes[fontSizes.length]}px`,
    },
    [EBreakpoint.LG]: {
      fontSize: `${fontSizes[fontSizes.length]}px`,
    },
    [EBreakpoint.XL]: {
      fontSize: `${fontSizes[fontSizes.length + 1]}px`,
    },
  },
  span: {
    [EBreakpoint.XS]: {
      fontSize: `${fontSizes[fontSizes.length - 1]}px`,
      margin: '0px',
    },
    [EBreakpoint.SM]: {
      fontSize: `${fontSizes[fontSizes.length - 1]}px`,
    },
    [EBreakpoint.MD]: {
      fontSize: `${fontSizes[fontSizes.length]}px`,
    },
    [EBreakpoint.LG]: {
      fontSize: `${fontSizes[fontSizes.length]}px`,
    },
    [EBreakpoint.XL]: {
      fontSize: `${fontSizes[fontSizes.length + 1]}px`,
    },
  },
};
