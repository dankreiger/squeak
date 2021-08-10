import { useApi } from '@squeak-frontend/shared.hooks';
import { restaurantFixtureSeeder } from '@squeak-shared.utils';
import { normalize } from 'normalizr';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { identity } from 'rxjs';
import {
  DummyDataContext,
  dummyDataListSchema,
  IDummyDataProviderProps,
} from '.';
import { Spinner } from '../../components';
import { dummyDataIntl } from './intl/dummy-data.frontend.web.app.context.intl';
import { TDummyDataContext } from './types';

const frontendOnly = process.env.NX_APP_TYPE === 'frontend';
const staticResponse = frontendOnly
  ? restaurantFixtureSeeder(identity)
  : undefined;

// quick implementation for dummy data (testings FE vs fullstack)
export function DummyDataProvider({ children }: IDummyDataProviderProps) {
  const { t } = useTranslation();
  const { loading, error, data } = useApi(`/api/restaurants`, {
    staticResponse,
  });
  const allData = useMemo<TDummyDataContext | undefined>(
    () => (data ? normalize(data, dummyDataListSchema) : undefined),
    [data]
  );

  if (loading) return <Spinner delay={250} />;
  if (error) return <h1>{t(dummyDataIntl.error)}</h1>;
  if (!allData) return <h1>{t(dummyDataIntl.no_data)}</h1>;

  return (
    <DummyDataContext.Provider value={allData}>
      {children}
    </DummyDataContext.Provider>
  );
}
