import React, {useState, Fragment} from 'react'

export default function Counter(){
  const [counter, setCounter] = useState(0);

  return(
    <Fragment>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </Fragment>
  )
}