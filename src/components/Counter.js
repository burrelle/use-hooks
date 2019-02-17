import React, {useState, Fragment} from 'react'
import { ThemeButton } from './Styles';

export default function Counter(){
  const [counter, setCounter] = useState(0);

  return(
    <Fragment>
      <p>{counter}</p>
      <ThemeButton onClick={() => setCounter(counter + 1)}>+</ThemeButton>
      <ThemeButton onClick={() => setCounter(counter - 1)}>-</ThemeButton>
    </Fragment>
  )
}
