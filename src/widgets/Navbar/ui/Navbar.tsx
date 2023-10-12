import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const toggleAuth = useCallback(() => {
    setIsAuthOpen((prev) => !prev);
  }, []);

  return (
    <>
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={toggleAuth}>
          {t('Войти')}
        </Button>
      </header>
      <Modal isOpen={isAuthOpen} onClose={toggleAuth}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quis
        voluptas voluptatibus consequatur earum necessitatibus ullam, ab ea
        recusandae doloribus.
      </Modal>
    </>
  );
};
