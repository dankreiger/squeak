import {
  LeftAccentedTextSt,
  LeftTextSt,
  LeftTextWrapperSt,
  RightTextSt,
  TextRowWrapperSt,
} from './text-row.components.css';
import type { ITextRowProps } from './types';
export const TextRow = ({
  left,
  right,
  accentedText,
  rightColor,
}: ITextRowProps) => (
  <TextRowWrapperSt>
    <LeftTextWrapperSt>
      <LeftTextSt>{left}</LeftTextSt>
      {accentedText && <LeftAccentedTextSt>{accentedText}</LeftAccentedTextSt>}
    </LeftTextWrapperSt>
    <RightTextSt rightColor={rightColor}>{right}</RightTextSt>
  </TextRowWrapperSt>
);
