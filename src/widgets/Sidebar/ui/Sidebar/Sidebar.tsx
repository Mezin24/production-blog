import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { useState } from 'react';
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
    localStorage.setItem(
      LOCAL_STORAGE_COLLAPSED_STATE,
      JSON.stringify(!collapsed)
    );
  };

  return (
    <aside
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={toggleCollapsed}>toggle</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};
