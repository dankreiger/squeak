import styled from 'styled-components';
import { mediaQuery } from '../../styleguide';

const paddingX = (val: string) => `
  padding-left: ${val};
  padding-right: ${val};
`;
export const PageSt = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 70px;
  grid-gap: 20px;
  min-height: 100vh;

  ${mediaQuery.md(`
    grid-gap: 30px;
  `)}
  ${mediaQuery.lg(`
    grid-gap: 40px;
  `)}
    ${mediaQuery.xl(`
    grid-gap: 50px;
  `)}

  > * {
    ${paddingX('16px')}
    ${mediaQuery.sm(paddingX('32px'))}
    ${mediaQuery.md(paddingX('42px'))}
    ${mediaQuery.lg(paddingX('64px'))}
  }
`;

export const PageMainSt = styled.main`
  max-width: 1800px;
`;
