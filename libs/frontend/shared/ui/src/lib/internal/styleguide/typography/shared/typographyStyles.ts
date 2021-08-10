import { css, SimpleInterpolation } from 'styled-components';
import { mediaQuery } from '../../breakpoints';
import { EBreakpoint } from '../../breakpoints/enums';
import { EHeadingTag } from '../enums';
import { fontSizes } from './fontSizes';

const getHeadingStyles = Object.values(EHeadingTag).reduce((acc, cur, idx) => {
  acc[cur] = {
    [EBreakpoint.XS]: `
      margin: 0;
      font-size: ${fontSizes[idx + 4]}px;
    `,
    [EBreakpoint.SM]: `
      font-size: ${fontSizes[idx + 3]}px;
    `,

    [EBreakpoint.MD]: `
      font-size: ${fontSizes[idx + 3]}px;
    `,
    [EBreakpoint.LG]: `
      font-size: ${fontSizes[idx + 3]}px;
    `,
    [EBreakpoint.XL]: `
      font-size: ${fontSizes[idx + 2]}px;
    `,
  };
  return acc;
}, {} as Record<EHeadingTag, Record<EBreakpoint, SimpleInterpolation>>);

const breakpointList = Object.values(EBreakpoint);
const h1Styles = css`
  ${breakpointList.map((bk) =>
    mediaQuery[bk](`
    ${getHeadingStyles.h1[bk]}
`)
  )}
`;
const h2Styles = css`
  ${breakpointList.map((bk) =>
    mediaQuery[bk](`
    ${getHeadingStyles.h2[bk]}
`)
  )}
`;
const h3Styles = css`
  ${breakpointList.map((bk) =>
    mediaQuery[bk](`
    ${getHeadingStyles.h3[bk]}
`)
  )}
`;
const h4Styles = css`
  ${breakpointList.map((bk) =>
    mediaQuery[bk](`
    ${getHeadingStyles.h4[bk]}
`)
  )}
`;
const h5Styles = css`
  ${breakpointList.map((bk) =>
    mediaQuery[bk](`
    ${getHeadingStyles.h5[bk]}
`)
  )}
`;
const h6Styles = css`
  ${breakpointList.map((bk) =>
    mediaQuery[bk](`
    ${getHeadingStyles.h6[bk]}
`)
  )}
`;

const pStyles = css`
  ${mediaQuery.xs(`
    margin: 0px;
    font-size: ${fontSizes[fontSizes.length - 1]}px;
  `)}
  ${mediaQuery.sm(`
    font-size: ${fontSizes[fontSizes.length]}px;
  `)}
`;

const spanStyles = css`
  ${mediaQuery.xs(`
    margin: 0px;
    font-size: ${fontSizes[fontSizes.length - 1]}px;
  `)}
  ${mediaQuery.sm(`
    font-size: ${fontSizes[fontSizes.length]}px;
  `)}
  ${mediaQuery.xl(`
    font-size: ${fontSizes[fontSizes.length + 1]}px;
  `)}
`;

export const typographyStyles = css`
  h1 {
    ${h1Styles}
  }
  h2 {
    ${h2Styles}
  }
  h3 {
    ${h3Styles}
  }
  h4 {
    ${h4Styles}
  }
  h5 {
    ${h5Styles}
  }
  h6 {
    ${h6Styles}
  }

  p {
    ${pStyles}
  }
  span {
    ${spanStyles}
  }
`;
