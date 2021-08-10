import { createGlobalStyle } from 'styled-components';

export const ThemeGlobalSt = createGlobalStyle<{ theme: Record<string, any> }>`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  html, body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  ${({ theme }) => theme.typography};

  button {
    transition: filter 300ms;

    &:hover {
      filter: brightness(110%);
    }

    &:active {
      filter: brightness(120%);
    }
  }
`;
