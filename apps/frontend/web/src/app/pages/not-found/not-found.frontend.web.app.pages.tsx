import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return <h1>Page Not Found</h1>;
}
