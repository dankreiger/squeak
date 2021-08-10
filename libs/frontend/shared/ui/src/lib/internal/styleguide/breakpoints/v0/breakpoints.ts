import { ITheme } from '../../theme';
import { EBreakpoint } from '../enums';

export const breakpointsV0: ITheme['breakpoints'] = [0, 768, 968, 1024, 1800];
export const breakpointsMapV0 = {
  [EBreakpoint.XS]: breakpointsV0[0],
  [EBreakpoint.SM]: breakpointsV0[1],
  [EBreakpoint.MD]: breakpointsV0[2],
  [EBreakpoint.LG]: breakpointsV0[3],
  [EBreakpoint.XL]: breakpointsV0[4],
};
