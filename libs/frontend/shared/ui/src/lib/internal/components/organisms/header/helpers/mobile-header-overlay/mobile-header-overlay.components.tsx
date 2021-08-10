import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { mobileHeaderOverlayIntl as intl } from './intl';
import {
  MobileHeaderOverlayCloseButtonSt,
  MobileHeaderOverlayInnerWrapperSt,
  MobileHeaderOverlayNavLinksSt,
  MobileHeaderOverlaySt,
} from './mobile-header-overlay.components.css';
import { IMobileHeaderOverlayProps } from './types';

export const MobileHeaderOverlay: FC<IMobileHeaderOverlayProps> = ({
  active,
  onClose,
  navLinks,
}) => {
  const { t } = useTranslation();
  return (
    <MobileHeaderOverlaySt active={active}>
      <MobileHeaderOverlayInnerWrapperSt>
        <MobileHeaderOverlayNavLinksSt>
          {navLinks}
        </MobileHeaderOverlayNavLinksSt>
        <MobileHeaderOverlayCloseButtonSt onClick={onClose}>
          {t(intl.button)}
        </MobileHeaderOverlayCloseButtonSt>
      </MobileHeaderOverlayInnerWrapperSt>
    </MobileHeaderOverlaySt>
  );
};
