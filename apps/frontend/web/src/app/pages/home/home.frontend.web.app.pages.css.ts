import { animated } from '@react-spring/web';
import { mediaQuery } from '@squeak-frontend/shared.ui';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const HomeWrapperSt = styled.div<{ count: number }>`
  display: grid;
  grid-gap: 20px;

  ${({ count }) => css`
    grid-template-columns: 1fr;

    ${mediaQuery.md(css`
      position: relative;
      display: grid;
      grid-template-columns: repeat(
        ${count >= 3 ? 3 : count},
        minmax(100px, 1fr)
      );
      grid-gap: 25px;
      padding: 25px;
      background: white;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
      will-change: width, height;
    `)}
  `};
`;

export const AnimatedHomeItemSt = styled(animated.div)`
  will-change: transform, opacity;
`;

export const HomeItemSt = styled(Link)`
  display: flex;
  cursor: pointer;
  padding: 20px;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  transition: 300ms filter;
  filter: brightness(90%);
  border-radius: 10px;
  text-decoration: none;

  &:hover {
    filter: brightness(80%);
  }
`;
