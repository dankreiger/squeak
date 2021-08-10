import { css } from 'styled-components';
import { fonts, typographyStyles } from '../shared';

const typographyV1 = css`
  html,
  body,
  .docs-story {
    font-family: 'Montserrat', sans-serif, ${fonts};
    font-weight: 500;
    line-height: 1.25;
  }

  ${typographyStyles}
`;

export { typographyV1 };
