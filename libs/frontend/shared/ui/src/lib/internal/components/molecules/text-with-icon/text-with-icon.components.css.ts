import styled from 'styled-components';

export const TextWithIconWrapperSt = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  min-height: 50px;
  align-items: center;
  grid-gap: 16px;
`;

export const TextSt = styled.h3`
  font-weight: 700;
`;

export const IconSt = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  width: 20px;
  height: 20px;
`;
