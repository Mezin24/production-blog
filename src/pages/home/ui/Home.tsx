import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('main');
  return <div>{t('Главная')}</div>;
};
export default Home;
