import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppHeaderLogoSt = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.7em;
`;

export const AppHeaderLogoTextSt = styled.span`
  margin-left: 20px;
  font-size: 1em;
`;
