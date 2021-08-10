import { Page, SqueakThemeProvider } from '@squeak-frontend/shared.ui';
import { BrowserRouter } from 'react-router-dom';
import { AppHeader } from '../components';
import { DummyDataProvider } from '../context';
import { Routes } from './_routes.frontend.web.app.pages';

export const Root = () => (
  <BrowserRouter>
    <DummyDataProvider>
      <SqueakThemeProvider>
        <Page header={<AppHeader />}>
          <Routes />
        </Page>
      </SqueakThemeProvider>
    </DummyDataProvider>
  </BrowserRouter>
);
