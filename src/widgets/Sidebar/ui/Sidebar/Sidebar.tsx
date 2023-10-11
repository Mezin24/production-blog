import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
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
      <Button data-testid='sidebar-toggle' onClick={toggleCollapsed}>
        toggle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};
