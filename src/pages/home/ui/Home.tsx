import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      <h1>{t('Главная')}</h1>
      <BugButton />
    </div>
  );
};
export default Home;
