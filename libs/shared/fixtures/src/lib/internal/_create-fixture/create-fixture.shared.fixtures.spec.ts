import { ENodeEnv } from '@squeak-shared.enums';
import { FIXTURES } from '..';
import {
  createFixture,
  fixtureErrorMessage,
} from './create-fixture.shared.fixtures';

const OLD_ENV = process.env;

describe('createFixture', () => {
  describe('function behaviour per environment', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation();
    beforeEach(() => {
      jest.resetModules(); // Clear the cache
      process.env = { ...OLD_ENV }; // Make a copy
    });

    afterAll(() => {
      process.env = OLD_ENV; // Restore old environment
    });

    beforeEach(() => {
      jest.clearAllMocks(); // Clear spies and mocks
    });

    it('returns the passed fixture in test environments', () => {
      const fixture = createFixture(FIXTURES);

      expect(fixture).toEqual(FIXTURES);
    });

    it('logs an error in development node environments', () => {
      process.env.NODE_ENV = ENodeEnv.DEVELOPMENT;
      createFixture(FIXTURES);

      expect(consoleError).toHaveBeenCalledTimes(1);
      expect(consoleError).toHaveBeenCalledWith(fixtureErrorMessage);
    });

    it('logs an error in production node environments', () => {
      process.env.NODE_ENV = ENodeEnv.PRODUCTION;
      createFixture(FIXTURES);

      expect(consoleError).toHaveBeenCalledTimes(1);
      expect(consoleError).toHaveBeenCalledWith(fixtureErrorMessage);
    });

    it('logs an error in non-node environments', () => {
      process.env.NODE_ENV = undefined;
      createFixture(FIXTURES);

      expect(consoleError).toHaveBeenCalledTimes(1);
      expect(consoleError).toHaveBeenCalledWith(fixtureErrorMessage);
    });
  });
});

describe('ENV reset', () => {
  it('returns to the test environment in a subsequent suite', () => {
    expect(process.env.NODE_ENV).toBe(ENodeEnv.TEST);
  });
});
