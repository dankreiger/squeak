import { deepFreeze } from '@squeak-frontend/shared.test-utils';
import { ENodeEnv } from '@squeak-shared.enums';
import { TFixture } from '../types';

/**
 * Test-only function (all fixtures are test only)
 */
export const fixtureErrorMessage = `
🚨 🚨 🚨 A test fixture is being imported into runtime code!
This can cause exponential growth in the app bundle size.
Please remove the test fixture import from them runtime code.
`;
export function createFixture(fixture: TFixture) {
  const { NODE_ENV } = process?.env || {};

  switch (NODE_ENV) {
    case ENodeEnv.TEST:
      return deepFreeze<TFixture>(fixture);
    default:
      console.error(fixtureErrorMessage);
      return deepFreeze<TFixture>(fixture);
  }
}
