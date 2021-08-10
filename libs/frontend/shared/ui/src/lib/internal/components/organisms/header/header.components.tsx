import { FC, useCallback, useEffect, useState } from 'react';
import {
  HeaderLogoSt,
  HeaderMobileMenuTriggerSt,
  HeaderNavLinksListSt,
  HeaderNavLinksWrapperSt,
  HeaderNavSt,
  HeaderSt,
} from './header.components.css';
import { BurgerMenu, MobileHeaderOverlay } from './helpers';
import { IHeaderProps } from './types';

export const Header: FC<IHeaderProps> = ({ logo, height, navLinks }) => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const handleMobileMenuToggle = useCallback(
    () => setMobileMenuActive(!mobileMenuActive),
    [mobileMenuActive]
  );
  const closeMobileMenu = useCallback(() => setMobileMenuActive(false), []);

  useEffect(() => {
    window.addEventListener('resize', closeMobileMenu);
    return () => {
      window.removeEventListener('resize', closeMobileMenu);
    };
  }, [closeMobileMenu]);

  return (
    <HeaderSt height={height}>
      <HeaderNavSt>
        <HeaderLogoSt>{logo}</HeaderLogoSt>
        <HeaderMobileMenuTriggerSt>
          <MobileHeaderOverlay
            active={mobileMenuActive}
            navLinks={navLinks}
            onClose={handleMobileMenuToggle}
          />
          <BurgerMenu
            active={mobileMenuActive}
            onClick={handleMobileMenuToggle}
          />
        </HeaderMobileMenuTriggerSt>
        <HeaderNavLinksWrapperSt>
          <HeaderNavLinksListSt>{navLinks}</HeaderNavLinksListSt>
        </HeaderNavLinksWrapperSt>
      </HeaderNavSt>
    </HeaderSt>
  );
};
