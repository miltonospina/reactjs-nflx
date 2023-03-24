import React, { Component } from "react";

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

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "span",
        null,
        "Current value is: [",
        React.createElement(
          "b",
          { "data-testid": "counter" },
          this.state.value
        ),
        "] "
      ),
      React.createElement(
        "button",
        { onClick: () => this.decrease(), "data-testid": "decrease" },
        "(-) Decrease"
      ),
      React.createElement(
        "button",
        { onClick: () => this.increase(), "data-testid": "increase" },
        "(+) Increase"
      )
    );
  }
}

export default Counter;
