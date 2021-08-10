import {
  IconSt,
  TextSt,
  TextWithIconWrapperSt,
} from './text-with-icon.components.css';
import { ITextWithIconProps } from './types';

export const TextWithIcon = ({ text, icon }: ITextWithIconProps) => (
  <TextWithIconWrapperSt>
    <IconSt>{icon}</IconSt>
    <TextSt>{text}</TextSt>
  </TextWithIconWrapperSt>
);
