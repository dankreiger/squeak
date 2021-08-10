import { useTranslation } from 'react-i18next';
import {
  BurgerMenuButtonSt,
  BurgerMenuLineSt,
  BurgerMenuLineWrapperSt,
} from './burger-menu.components.css';
import { IBurgerMenuProps } from './types';

export const BurgerMenu = ({ active, onClick }: IBurgerMenuProps) => {
  const { t } = useTranslation();
  return (
    <BurgerMenuButtonSt
      aria-label={t(
        'ui.components.organisms.header.helpers.burger-menu.trigger'
      )}
      onClick={onClick}
    >
      <BurgerMenuLineWrapperSt>
        <BurgerMenuLineSt active={active} first></BurgerMenuLineSt>
        <BurgerMenuLineSt active={active}></BurgerMenuLineSt>
      </BurgerMenuLineWrapperSt>
    </BurgerMenuButtonSt>
  );
};
