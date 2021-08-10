import { ITypography } from '../interfaces';
import {
  fallbackFonts,
  fontSizes,
  fontWeight,
  typographyStyles,
} from '../shared';

const typographyV0: ITypography = {
  fontFamily: {
    body: `Roboto, ${fallbackFonts}`,
    heading: 'inherit',
  },
  fontSizes,
  fontWeight: fontWeight,
  lineHeight: {
    body: 1.5,
    heading: 1.125,
  },
  styles: typographyStyles,
};

export { typographyV0 };
