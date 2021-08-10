import { ITheme } from '../../theme';
import { EBreakpoint } from '../enums';

export const breakpointsV1: ITheme['breakpoints'] = [0, 768, 968, 1024, 1800];
export const breakpointsMapV1 = {
  [EBreakpoint.XS]: breakpointsV1[0],
  [EBreakpoint.SM]: breakpointsV1[1],
  [EBreakpoint.MD]: breakpointsV1[2],
  [EBreakpoint.LG]: breakpointsV1[3],
  [EBreakpoint.XL]: breakpointsV1[4],
};
