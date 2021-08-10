import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrontendSharedUiProps {}

const StyledFrontendSharedUi = styled.div`
  color: pink;
`;

export function FrontendSharedUi(props: FrontendSharedUiProps) {
  const { t } = useTranslation();
  return (
    <StyledFrontendSharedUi>
      <h1>{t('storybook.test')}</h1>
    </StyledFrontendSharedUi>
  );
}

export default FrontendSharedUi;
