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