import { ITheme } from '../../theme';
import { EBreakpoint } from '../enums';

export const breakpointsV2: ITheme['breakpoints'] = [0, 768, 968, 1024, 1800];

export const breakpointsMapV2 = {
  [EBreakpoint.XS]: breakpointsV2[0],
  [EBreakpoint.SM]: breakpointsV2[1],
  [EBreakpoint.MD]: breakpointsV2[2],
  [EBreakpoint.LG]: breakpointsV2[3],
  [EBreakpoint.XL]: breakpointsV2[4],
};
