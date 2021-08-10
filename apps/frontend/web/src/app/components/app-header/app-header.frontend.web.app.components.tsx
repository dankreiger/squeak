import { Header } from '@squeak-frontend/shared.ui';
import { AppHeaderLogo as Logo, AppHeaderNavLinks as NavLinks } from './items';

export const AppHeader = () => (
  <Header logo={<Logo />} navLinks={<NavLinks />} />
);
