import { FaHome } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { AppHeaderLogoSt } from './app-header-logo.frontend.web.app.components.css';
export const AppHeaderLogo = () => {
  const theme = useTheme();

  return (
    <AppHeaderLogoSt to="/">
      <FaHome color={theme.colors.white} />
    </AppHeaderLogoSt>
  );
};
