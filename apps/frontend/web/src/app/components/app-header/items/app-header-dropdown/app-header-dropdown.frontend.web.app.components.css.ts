import { mediaQuery } from '@squeak-frontend/shared.ui';
import styled, { css } from 'styled-components';

export const AppHeaderDropdownWrapperSt = styled.div`
  > select {
    font-size: 1em;
    background-color: transparent;
    text-align: center;
    border: none;
    ${({ theme }) => css`
      color: ${theme.colors.text};
      ${mediaQuery.md(`
      color: ${theme.colors.background};
      `)};
    `};
  }
`;
