import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const counter = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const decrement = () => {
    dispatch(counterActions.decrease());
  };

  const increment = () => {
    dispatch(counterActions.increase());
  };

  return (
    <div className={classNames('', {}, [className])}>
      <h1 data-testid='counter-value'>{counter}</h1>
      <Button
        theme={ButtonTheme.PRIMARY}
        onClick={decrement}
        data-testid='counter-decrement'
      >
        Decrement
      </Button>
      <Button
        theme={ButtonTheme.PRIMARY}
        onClick={increment}
        data-testid='counter-increment'
      >
        Increment
      </Button>
    </div>
  );
};
