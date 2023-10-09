import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('should render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
  test('should render with theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
