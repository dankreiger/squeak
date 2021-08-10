import { useTranslation } from 'react-i18next';
import { PageMainSt, PageSt } from './page.layout.css';
import type { IPage } from './types';

export const Page = ({ header, children }: IPage) => {
  const { t } = useTranslation();
  return (
    <PageSt>
      {header}

      <PageMainSt>
        <div>{children}</div>
      </PageMainSt>
      <footer>
        <div>
          {t('web.ui.layouts.page.footer.date', {
            date: new Date(),
          })}
        </div>
      </footer>
    </PageSt>
  );
};
