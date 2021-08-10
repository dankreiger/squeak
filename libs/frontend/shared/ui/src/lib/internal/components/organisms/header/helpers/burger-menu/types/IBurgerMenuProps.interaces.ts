import { MouseEventHandler } from 'react';

export interface IBurgerMenuProps {
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
