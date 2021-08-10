import { BASE_LANG } from '@squeak-frontend/shared.i18n';
import { webi18n } from '@squeak-frontend/web.i18n';
import type { TNestedObjectPaths } from '@squeak-shared.types';

const _dummyData =
  webi18n.resources[BASE_LANG].translation.web.app.hocs.dummyData;

export type TDummyDataIntl = TNestedObjectPaths<typeof _dummyData>;
