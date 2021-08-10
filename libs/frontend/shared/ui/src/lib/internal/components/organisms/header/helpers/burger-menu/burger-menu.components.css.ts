import styled, { css } from 'styled-components';
import { mobileHeaderOverlayTransitionDuration as duration } from '../mobile-header-overlay';

export const BurgerMenuButtonSt = styled.button`
  display: flex;
  align-items: center;
  width: 250px;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const burgerHeight = 24;
export const BurgerMenuLineWrapperSt = styled.span`
  position: relative;
  height: ${burgerHeight}px;
  width: 24px;
`;

const anims = (active: boolean) => [
  {
    property: 'top',
    duration: `${duration}ms`,
    timingFn: 'ease-in-out',
    delay: `${active ? 0 : duration}ms`,
  },
  {
    property: 'transform',
    duration: `${duration}ms`,
    timingFn: 'ease-in-out',
    delay: `${active ? duration : 0}ms`,
  },
  {
    property: 'background-color',
    duration: `${duration}ms`,
    timingFn: 'ease-in-out',
    delay: `${duration}ms`,
  },
];

const getTransitionCss = ({ active }: { active: boolean }) => {
  let transitionCss = '';
  const animsInit = anims(active);
  animsInit.forEach((p, i) => {
    const delim = i === animsInit.length - 1 ? '' : ', ';
    transitionCss += `${Object.values(p).join(' ')}${delim}`;
  }, '');
  return transitionCss;
};

const burgerAnimationCss = css<{ active: boolean; first?: boolean }>`
  transition: ${getTransitionCss};
  top: ${({ active, first }) =>
    `${burgerHeight / (active ? 2 : first ? 3 : 1.5)}px`};
  transform: ${({ active, first }) =>
    `rotate(${active ? `${first ? '-' : ''}45deg` : '0deg'})`};
`;
export const BurgerMenuLineSt = styled.span<{
  active: boolean;
  first?: boolean;
}>`
  position: absolute;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.text : theme.colors.background};
  ${burgerAnimationCss};
`;
