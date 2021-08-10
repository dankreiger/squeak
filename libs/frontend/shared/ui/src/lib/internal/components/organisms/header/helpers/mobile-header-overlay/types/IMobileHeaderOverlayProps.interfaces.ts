import { MouseEventHandler } from 'react';
import { IHeaderProps } from '../../../types';

export interface IMobileHeaderOverlayProps {
  active: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
  navLinks: IHeaderProps['navLinks'];
}
