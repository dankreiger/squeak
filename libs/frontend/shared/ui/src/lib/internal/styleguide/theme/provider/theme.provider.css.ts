import { createGlobalStyle, css } from 'styled-components';
import { EBreakpoint } from '../../breakpoints/enums';
import { EHeadingTag, ETextTag } from '../../typography';
import { ITheme } from '../interfaces';

const tags = [...Object.values(EHeadingTag), ...Object.values(ETextTag)];
const breakpoints = Object.values(EBreakpoint);
export const ThemeGlobalSt = createGlobalStyle<{ theme: ITheme }>`
  * {
    box-sizing: border-box;
  }
  html, body, .docs-story {
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    line-height: ${({ theme }) => theme.typography.lineHeight.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }
  ${tags.join(', ')} {
    margin: 0;
  }
  ${({ theme }) =>
    breakpoints.map(
      (bk) => css`
        @media (min-width: ${theme.breakpointsMap[bk]}px) {
          ${tags.map(
            (tag) =>
              css`
                ${tag} {
                  ${theme.typography.styles[tag][bk]}
                }
              `
          )}
        }
      `
    )}


`;
