import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouteDecorator = (Store: Story) => (
  <BrowserRouter>
    <Store />
  </BrowserRouter>
);
