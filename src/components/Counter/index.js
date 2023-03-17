import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = { value: props.initial || 0 };
  }

  increase() {
    this.setState({ value: this.state.value + 1 });
  }

  decrease() {
    this.setState({ value: this.state.value - 1 });
  }

  get currentValue() {
    return `Current value is: [ ${this.state.value} ]`;
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('span', null, this.currentValue),
      React.createElement('button', { onClick: () => this.decrease() }, '(-) Decrease'),
      React.createElement('button', { onClick: () => this.increase() }, '(+) Increase'),
    );
  }
}

export default Counter;
