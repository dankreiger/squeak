import { render } from '@testing-library/react';
import App from './app';

// TODO: material ui pickers is deprecated,
// and causing a lot of noise in the tests
// this package should be updated!

const CONSOLE = { ...global.console };

(global as any).console = {
  log: console.log(`
  TODO: @material-ui/pickers is deprecated, and causing a lot of noise in the tests.
        this package should be updated!
  `), // console.log are ignored in tests
  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  error: jest.fn(),
};

describe('App', () => {
  afterAll(() => {
    global.console = CONSOLE;
  });
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });
});
