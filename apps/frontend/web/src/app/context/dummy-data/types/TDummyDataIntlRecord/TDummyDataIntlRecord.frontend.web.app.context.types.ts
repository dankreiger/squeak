import { intlPrefix } from '../../../../constants';
import { TDummyDataIntl } from '../TDummyDataIntl';

export type TDummyDataIntlRecord = Record<
  string,
  `${typeof intlPrefix}.dummyData.${TDummyDataIntl}`
>;
