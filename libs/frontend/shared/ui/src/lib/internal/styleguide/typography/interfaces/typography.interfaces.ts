import { EBreakpoint } from '../../breakpoints';
import { EHeadingTag, ETextTag } from '../enums';
export interface ITypography {
  fontSizes: number[];
  fontFamily: {
    body: string;
    heading: string;
  };
  fontWeight: {
    regular: number;
    medium: number;
    bold: number;
  };
  lineHeight: {
    body: number;
    heading: number;
  };
  styles: Record<
    EHeadingTag | ETextTag,
    Record<EBreakpoint, Record<string, string>>
  >;
}
