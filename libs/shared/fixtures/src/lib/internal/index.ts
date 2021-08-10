import { identity } from 'rxjs';
import { EFixture } from './enums';
import { OPENING_HOURS_FIXTURES } from './opening-hours';
import type { TFixture } from './types';
import { createFixture } from './_create-fixture';
/**
 *
 * @param disableWarning - only use for temporary dummy data testing
 * @returns
 */
export const FIXTURES = ({
  disableWarning,
}: { disableWarning?: boolean } = {}): Required<TFixture> => {
  let wrapper = createFixture;
  if (disableWarning) {
    wrapper = identity;
  }
  return wrapper({
    [EFixture.OPENING_HOURS]: OPENING_HOURS_FIXTURES,
  });
};

export type { TFixtureRegistry } from './types';
