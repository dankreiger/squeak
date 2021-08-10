import { EBreakpoint } from '../enums';

const breakpoints = [0, 320, 768, 968, 1024];
export const breakpointsMap = {
  [EBreakpoint.XS]: breakpoints[0],
  [EBreakpoint.SM]: breakpoints[1],
  [EBreakpoint.MD]: breakpoints[2],
  [EBreakpoint.LG]: breakpoints[3],
  [EBreakpoint.XL]: breakpoints[4],
};
