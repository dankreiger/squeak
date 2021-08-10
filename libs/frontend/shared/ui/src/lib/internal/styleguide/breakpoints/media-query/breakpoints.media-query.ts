import { entries } from '@squeak-shared.utils';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import { breakpointsMap } from '..';
import { EBreakpoint } from '../enums';
import type { TMediaQueryFn } from '../types/TMediaQueryFn';

const mediaQueryCss =
  (bkValue: number) => (styles: FlattenSimpleInterpolation | string) =>
    css`
      @media (min-width: ${bkValue}px) {
        ${styles};
      }
    `;
export const mediaQuery = entries(breakpointsMap).reduce(
  (acc, [label, bkValue]) => {
    acc[label] = mediaQueryCss(bkValue);
    return acc;
  },
  {} as Record<EBreakpoint, TMediaQueryFn | any>
);
