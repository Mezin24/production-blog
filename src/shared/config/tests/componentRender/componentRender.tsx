import { render } from '@testing-library/react';
import 'app/styles/index.scss';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTesting';

export const componentRender = (component: ReactNode) =>
  render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
