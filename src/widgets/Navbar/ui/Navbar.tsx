import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to='/' theme={AppLinkTheme.INVERTED}>
          Home
        </AppLink>
        <AppLink to='/about' theme={AppLinkTheme.INVERTED}>
          About
        </AppLink>
      </div>
    </header>
  );
};
