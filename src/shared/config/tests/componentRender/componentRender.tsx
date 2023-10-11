import { ThemeProvider } from 'app/providers/theme';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import 'app/styles/index.scss';
import i18n from 'shared/config/i18n/i18nForTesting';
import { I18nextProvider } from 'react-i18next';

export const componentRender = (component: ReactNode) => {
  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
};
