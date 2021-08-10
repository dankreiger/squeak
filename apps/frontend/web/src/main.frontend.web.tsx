import '@squeak-frontend/web.i18n';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Root } from './app/pages';

const root = document.getElementById('root');
render(
  <StrictMode>
    <Root />
  </StrictMode>,
  root
);
