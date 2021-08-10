import styled from 'styled-components';

export const mobileHeaderOverlayTransitionDuration = 300; // ms
export const MobileHeaderOverlaySt = styled.div<{ active: boolean }>`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: ${({ active }) => (active ? '0' : '-100%')};
  transition: 300ms left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.muted};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.98;
`;

export const MobileHeaderOverlayInnerWrapperSt = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileHeaderOverlayNavLinksSt = styled.div`
  display: flex;
  font-size: 2em;
`;

export const MobileHeaderOverlayCloseButtonSt = styled.button`
  font-size: 1.2em;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  padding: 15px;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.white};
`;
