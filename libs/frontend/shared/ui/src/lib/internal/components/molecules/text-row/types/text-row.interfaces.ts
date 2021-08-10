import { ReactNode } from 'react';
import { EColor } from '../../../../styleguide';

export interface ITextRowProps {
  left: ReactNode;
  right: ReactNode;
  accentedText?: ReactNode;
  rightColor?: EColor;
}
