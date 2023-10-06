import { Button, ButtonTheme } from '../Button/Button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { useTheme } from 'app/providers/theme';
import { Theme } from 'app/providers/theme/ui/ThemeContext';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
