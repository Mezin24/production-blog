import { CounterSchema } from '../types/CounterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  test('should decrement', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(
      counterReducer(state as CounterSchema, counterActions.decrease())
    ).toEqual({ value: 9 });
  });

  test('should increment', () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(
      counterReducer(state as CounterSchema, counterActions.increase())
    ).toEqual({ value: 11 });
  });

  test('should work with empty value', () => {
    expect(counterReducer(undefined, counterActions.increase())).toEqual({
      value: 1,
    });
  });
});
