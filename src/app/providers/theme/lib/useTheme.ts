import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../ui/ThemeContext';

interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};
