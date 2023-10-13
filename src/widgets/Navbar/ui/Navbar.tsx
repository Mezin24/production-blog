import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onOpen = useCallback(() => {
    setIsAuthOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  return (
    <>
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpen}>
          {t('Войти')}
        </Button>
      </header>
      <LoginModal lazy isOpen={isAuthOpen} onClose={onClose} />
    </>
  );
};
