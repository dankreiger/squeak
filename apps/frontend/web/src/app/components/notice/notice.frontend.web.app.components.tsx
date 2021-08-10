import { useTranslation } from 'react-i18next';
import { NoticeSt } from './notice.frontend.web.app.components.css';

export const Notice = () => {
  const { t } = useTranslation();
  return (
    <NoticeSt>
      <div>Some notes</div>
      <ul>
        <li>{t('web.app.components.notice.funny')}</li>
        <li>
          Click on one of the boxes below to see an example of opening hours.
        </li>
        <li>
          <code>realistic-f0</code> is the one from the challenge description
        </li>

        {process.env.NX_APP_TYPE !== 'frontend' && (
          <>
            <li>
              If you start the full-stack app, feel free to go to the{' '}
              <a href="http://localhost:3334/" target="_blank" rel="noreferrer">
                admin page
              </a>{' '}
              to make changes
            </li>
            <li>
              If you have started the full-stack app, and you do not see data,
              please seed the db with <code>yarn db-seed</code>
            </li>
          </>
        )}
      </ul>
    </NoticeSt>
  );
};
