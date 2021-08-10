import { FIXTURES } from '@squeak-shared.fixtures';
import { TRestaurantResponseData } from '@squeak-shared.types';
import { entries } from '../entries';

export const restaurantFixtureSeeder = (backendCb: <T>(arg: T) => void) => {
  let fakePrimaryKey = 0;
  return entries(FIXTURES({ disableWarning: true }).OPENING_HOURS).reduce(
    (acc, [fixtureType, fixtureValue]) => {
      entries(fixtureValue).forEach(([fixtureKey, openingHours], i) => {
        const name = `${fixtureType}-${fixtureKey}`;
        console.log(`seeding item ${fakePrimaryKey}: ${name}`);
        let seed = {
          name,
          city: [
            'London',
            'Berlin',
            'Helsinki',
            'New York',
            'Havana',
            'Buenos Aires',
          ][i],
          country: 'England',
          openingHours,
        };
        if (process.env.NX_APP_TYPE === 'frontend') {
          seed = Object.assign(seed, { id: fakePrimaryKey });
        } else {
          backendCb<typeof seed>(seed);
        }
        acc.push(seed);
        fakePrimaryKey += 1;
      });
      return acc;
    },
    [] as Partial<TRestaurantResponseData>[]
    // id is optional for dummy data testing,
    // since the backend will assign an id by itself
    // when doing fullstack testing
  );
};
