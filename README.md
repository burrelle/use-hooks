# useHooks()
Ampersand DevX - 22 February 2019

## What is a class?
```php
<?php

class Counter
{
    private $counter;

    public function __construct()
    {
        $this->counter = 0;
    }

    public function increment()
    {
        $this->counter++;
    }

    public function decrement()
    {
        $this->counter--;
    }

    public function getCounter()
    {
        return $this->counter;
    }
}

$counter = new Counter();
echo $counter->getCounter() . PHP_EOL;
echo $counter->getCounter($counter->increment()) . PHP_EOL;
echo $counter->getCounter($counter->decrement()) . PHP_EOL;
```

React Class
```jsx
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ value: this.state.value + 1 });
  }

  decrement() {
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
```

What is this? How is this intuitive?
```js
this.increment = this.increment.bind(this);
this.decrement = this.decrement.bind(this);
```

Simplify with arrow functions because they retain this keyword
Shorten to one line ES6 implicit return.
```jsx
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  increment = () => this.setState({ value: this.state.value + 1 });
  decrement = () => this.setState({ value: this.state.value - 1 });

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
```

Could we simplify it more?
Enter React Hooks - useState hook. 

Explain array destructuring 
```js
const [counter, setCounter] = useState(0);
```

Class Components vs Functional Components
```jsx
class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  ...logic

  render(){
    return ...
  }
}

export default Counter
```

Functional Component (without hooks)
```js
// 1. Function
export default function Counter(props){
  return (
    <p>{props.value}</p>
    <button>+</button>
    <button>-</button>
  )
}

// 2. Arrow Function
const Counter = (props) => {
  return (
    <p>{props.value}</p>
    <button>+</button>
    <button>-</button>
  )
} 
```

Enter useState() hook
```jsx
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
```
