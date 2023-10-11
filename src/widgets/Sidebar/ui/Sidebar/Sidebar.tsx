import { t } from 'i18next';
import { useEffect, useState } from 'react';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const LOCAL_STORAGE_COLLAPSED_STATE = 'web_app_collapsed';
const defaultState =
  (JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_COLLAPSED_STATE)
  ) as boolean) || false;

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(defaultState);
  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_COLLAPSED_STATE,
      JSON.stringify(collapsed)
    );
  }, [collapsed]);

  return (
    <aside
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={cls.links}>
        <AppLink
          to={routePaths.main}
          theme={AppLinkTheme.INVERTED}
          className={cls.item}
        >
          <HomeIcon className={cls.icon} />
          <span className={cls.link}>{t('Главная')}</span>
        </AppLink>
        <AppLink
          to={routePaths.about}
          theme={AppLinkTheme.INVERTED}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('О нас')}</span>
        </AppLink>
      </div>
      <Button
        data-testid='sidebar-toggle'
        onClick={toggleCollapsed}
        className={cls.toggleBtn}
        square
        size={ButtonSize.SIZE_M}
        theme={ButtonTheme.PRIMARY}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </aside>
  );
};
