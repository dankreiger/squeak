import styled from 'styled-components';
import { EColor, mediaQuery } from '../../../styleguide';

export const TextRowWrapperSt = styled.div`
  display: flex;
  min-height: 45px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 12px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.muted};

  ${mediaQuery.md(`
    min-height: 55px;
  `)}
`;

export const LeftTextWrapperSt = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-transform: capitalize;
`;

export const LeftTextSt = styled.div`
  font-size: 16px;
  font-weight: 500;
  ${mediaQuery.md(`
    font-size: 22px;
  `)}
`;
export const LeftAccentedTextSt = styled.div`
  font-size: 12px;

  font-weight: 700;
  margin-left: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.highlight};
  ${mediaQuery.md(`
    font-size: 16px;
    margin-left: 16px;

  `)}
`;

export const RightTextSt = styled.div<{ rightColor?: EColor }>`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme, rightColor = EColor.SECONDARY }) =>
    theme.colors[rightColor]};
  ${mediaQuery.md(`
    font-size: 22px;
  `)};
`;
