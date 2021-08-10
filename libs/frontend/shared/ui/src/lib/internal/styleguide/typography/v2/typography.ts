import { css } from 'styled-components';
import { fonts, typographyStyles } from '../shared';

const typographyV2 = css`
  html,
  body,
  .docs-story {
    font-family: Silom, monospace, ${fonts};
    font-weight: 500;
    line-height: 1.25;
  }
  ${typographyStyles}
`;

export { typographyV2 };
