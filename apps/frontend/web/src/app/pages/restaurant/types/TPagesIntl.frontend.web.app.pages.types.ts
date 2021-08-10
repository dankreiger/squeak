import { BASE_LANG } from '@squeak-frontend/shared.i18n';
import { webi18n } from '@squeak-frontend/web.i18n';
import type { TNestedObjectPaths } from '@squeak-shared.types';

const _pages = webi18n.resources[BASE_LANG].translation.web.app.pages;
export type TPagesIntl = TNestedObjectPaths<typeof _pages>;
