import styled from 'styled-components';

export const PanelWrapperSt = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 4px 2px ${({ theme }) => theme.colors.muted};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px;
`;

export const PanelDividerSt = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
`;
