import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('should render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });

  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('counter-decrement'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });

  test('increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    userEvent.click(screen.getByTestId('counter-increment'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
  });
});
