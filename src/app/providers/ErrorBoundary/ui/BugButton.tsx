import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}
export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setError(true);
  };
  useEffect(() => {
    if (error) {
      throw new Error('Ошибка');
    }
  }, [error]);

  return (
    <button onClick={onToggle} type='button'>
      {t('Ошибка')}
    </button>
  );
};
