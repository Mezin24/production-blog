import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';

describe('Sidebar', () => {
  test('should render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('should collapsed', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
