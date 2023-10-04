import { useState } from 'react';
import classes from './counter.module.scss';
import '../index.scss';

export const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div className='app'>
      <h1>Counter: {value}</h1>
      <button className={classes.btn} onClick={() => setValue(value + 1)}>
        Increment
      </button>
    </div>
  );
};
