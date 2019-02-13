export const StateCounterSource = `
import React from 'react';

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
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;`.trim();
