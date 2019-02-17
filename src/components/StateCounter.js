import React from 'react';
import { ThemeButton } from './Styles';


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
        <ThemeButton onClick={this.increment}>+</ThemeButton>
        <ThemeButton onClick={this.decrement}>-</ThemeButton>
      </div>
    );
  }
}

export default Counter;
