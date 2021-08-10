import { IOpeningHoursUIData } from '@squeak-frontend/shared.types';
import { TextRow } from '@squeak-frontend/shared.ui';
import { formatTimesForUI } from '@squeak-frontend/shared.utils';
import { EDayOfWeek } from '@squeak-shared.enums';
import { FC } from 'react';

export const OpeningTimesRow: FC<{
  day: EDayOfWeek;
  times: IOpeningHoursUIData[];
}> = ({ day, times }) => <TextRow {...formatTimesForUI([day, times])} />;
