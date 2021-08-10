import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
// Avoid conflict with app.json
// @ts-ignore
import App from './App.tsx';

it.todo('renders correctly', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});
