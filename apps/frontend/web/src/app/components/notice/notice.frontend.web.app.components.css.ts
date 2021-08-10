import styled from 'styled-components';

export const NoticeSt = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  margin-bottom: 40px;

  > div:first-child {
    margin-bottom: 30px;
  }

  > code {
    margin-right: 10px;
  }
`;
