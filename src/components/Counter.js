import React, { useState } from 'react';
import { ThemeButton } from './Styles';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <ThemeButton onClick={() => setCounter(counter + 1)}>+</ThemeButton>
      <ThemeButton onClick={() => setCounter(counter - 1)}>-</ThemeButton>
    </div>
  );
}

export default Counter;
