import { mediaQuery } from '@squeak-frontend/shared.ui';
import styled, { css } from 'styled-components';

export const AppHeaderNavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin-bottom: 20px;

  ${mediaQuery.md(css`
    flex-direction: row;
    margin-bottom: 0px;

    > * {
      margin-right: 20px;
    }
  `)}
`;
