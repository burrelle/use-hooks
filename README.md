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

Forms without hooks
```jsx
import React, { Component } from 'react';

class Signup extends Component {
  state = {
    name: '',
    password: '',
    email: ''
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form
        method="post"
        onSubmit={async e => {
          e.preventDefault();
          // Post the form
          console.log(this.state);
          this.setState({ name: '', email: '', password: '' });
        }}
      >
        <h2>Sign Up for An Account</h2>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.saveToState}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.saveToState}
          />
        </label>

        <button type="submit">Sign Up!</button>
      </form>
    );
  }
}

export default Signup;
```

Sign Up with Hooks
```jsx
import React, { useState } from 'react';
import FormInput from './FormInput';

export default function Signup() {
  const [values, setValues] = useState({ name: '', email: '', password: ''});

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <form
      method="post"
      onSubmit={async e => {
        e.preventDefault();
        // Post the form
        console.log(this.state);
        setValues({ name: '', email: '', password: '' });
      }}
    >
      <h2>Sign Up for An Account</h2>
      <label htmlFor="email">
        Email
        <FormInput
          type="email"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={onChange}
        />
      </label>
      <label htmlFor="name">
        Name
        <FormInput
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={onChange}
        />
      </label>
      <label htmlFor="password">
        Password
        <FormInput
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={onChange}
        />
      </label>

      <button type="submit">Sign Up!</button>
    </form>
  );
}
```

```jsx
import React from 'react';

export default function FormInput({
  type,
  name,
  placeholder,
  value,
  onChange,
  additional
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...additional}
    />
  );
}
```

useHooks: [useState, useEffect]
```jsx
export default function HooksSearch() {
  const [query, setQuery] = useState('');
  const [searchable, setSearchable] = useState([]);
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get('https://api.punkapi.com/v2/beers');
    setSearchable(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getInfo = wordToMatch => {
    return searchable.filter(item => {
      const regex = new RegExp(wordToMatch, 'gi');
      return item.name.match(regex);
    });
  };

  useEffect(() => {
    query && query.length >= 1 ? setResults(getInfo(query)) : setResults([]);
  }, [query]);

  return (
    <div>
      <Form>
        <SearchIcon width="16" height="16" />
        <Input
          type="text"
          placeholder="Search for..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </Form>
      <Suggestions results={results} />
    </div>
  );
}
```

Custom Hooks
```jsx
const useFetch = (url, setData) => {
  const fetchData = async () => {
    const { data } = await axios.get(url);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
};

const useResults = (query, setResults, getInfo, searchable) => {
  useEffect(() => {
    query && query.length >= 1 ? setResults(getInfo(searchable, query)) : setResults([]);
  }, [query]);
}

const getInfo = (searchable, wordToMatch) => {
  return searchable.filter(item => {
    const regex = new RegExp(wordToMatch, 'gi');
    return item.name.match(regex);
  });
};

export default function HooksSearch() {
  const [query, setQuery] = useState('');
  const [searchable, setSearchable] = useState([]);
  const [results, setResults] = useState([]);

  const url = 'https://api.punkapi.com/v2/beers';
  useFetch(url, setSearchable);
  useResults(query, setResults, getInfo, searchable)

  return (
    <div>
      <Form>
        <SearchIcon width="16" height="16" />
        <Input
          type="text"
          placeholder="Search for..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </Form>
      <Suggestions results={results} />
    </div>
  );
}
```

Custom Hooks + useRef
```jsx
const useFetch = (url, setData) => {
  const fetchData = async () => {
    const { data } = await axios.get(url);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
};

const useResults = (query, setResults, getInfo, searchable) => {
  useEffect(() => {
    query && query.length >= 1 ? setResults(getInfo(searchable, query)) : setResults([]);
  }, [query]);
}

const getInfo = (searchable, wordToMatch) => {
  return searchable.filter(item => {
    const regex = new RegExp(wordToMatch, 'gi');
    return item.name.match(regex);
  });
};

export default function HooksSearch() {
  const [query, setQuery] = useState('');
  const [searchable, setSearchable] = useState([]);
  const [results, setResults] = useState([]);
  const queryRef = useRef(query);

  const url = 'https://api.punkapi.com/v2/beers';
  useFetch(url, setSearchable);
  useResults(query, setResults, getInfo, searchable)

  return (
    <div>
      <Form>
        <SearchIcon width="16" height="16" />
        <Input
          type="text"
          placeholder="Search for..."
          ref={queryRef}
          onChange={() => setQuery(queryRef.current.value)}
        />
      </Form>
      <Suggestions results={results} />
    </div>
  );
}
```