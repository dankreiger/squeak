import styled from 'styled-components';
import { mediaQuery } from '../../../styleguide';

export const headerZIndex = 1;
export const HeaderSt = styled.header<{ height?: string }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: ${({ height = '60px' }) => height};
  display: flex;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.muted};
  border-style: solid;
  border-width: 0px 0px 1px;
  z-index: ${headerZIndex};
`;

export const HeaderNavSt = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderLogoSt = styled.div`
  display: none;
  ${mediaQuery.md(`
    display: flex;
  `)}
`;

export const HeaderMobileMenuTriggerSt = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  ${mediaQuery.md(`
    display: none;
  `)}
`;

export const HeaderNavLinksWrapperSt = styled.div`
  display: flex;
`;

export const HeaderNavLinksListSt = styled.div`
  cursor: pointer;
  display: none;
  color: ${({ theme }) => theme.colors.white};
  ${mediaQuery.md(`
    display: flex;
    align-items: center;
  `)};
`;
