import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/theme';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (Story: Story) =>
  (
    <ThemeProvider initialState={theme}>
      <body className={theme}>
        <div className='app'>
          <Story />
        </div>
      </body>
    </ThemeProvider>
  );
