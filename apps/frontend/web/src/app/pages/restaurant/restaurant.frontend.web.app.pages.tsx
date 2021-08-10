import { TOpeningHoursUI } from '@squeak-frontend/shared.types';
import { Panel, TextWithIcon } from '@squeak-frontend/shared.ui';
import { getUIOpeningHours } from '@squeak-frontend/shared.utils';
import { TEntries } from '@squeak-shared.utils';
import { map } from 'ramda';
import { useCallback, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { OpeningTimesRow, RawData } from '../../components';
import { DummyDataContext } from '../../context';
import { restaurantIntl } from './intl';

export default function Restaurant() {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const data = useContext(DummyDataContext);

  const getRowItem = useCallback(
    ([day, times]: TEntries<TOpeningHoursUI>) => ({
      vdomKey: `${day}-${i18n.language}`,
      content: <OpeningTimesRow day={day} times={times} />,
    }),
    [i18n.language] // informs memoization language has changed (should find a better way)
  );

  const openingHours = useMemo(() => {
    const _id = parseInt(id, 10);
    const { dummyData } = data.entities;
    return dummyData[_id].openingHours;
  }, [data, id]);

  const rows = useMemo(
    () => map(getRowItem, getUIOpeningHours(openingHours)),
    [getRowItem, openingHours]
  );

  const header = (
    <TextWithIcon
      text={t(`${restaurantIntl.opening_hours_header}`)}
      icon={<AiOutlineClockCircle fontSize="20px" />}
    />
  );

  const props = { header, rows };

  return (
    <div>
      <Panel {...props} />
      <RawData data={openingHours} />
    </div>
  );
}
