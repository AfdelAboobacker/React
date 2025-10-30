import React, { Component } from "react";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidUpdate(prevState) {
    //prevstste is the props and stateof the component before the update
    if (prevState.count !== this.state.count) {
      console.log(`component updated! new count: ${this.state.count}`);
    }
  }

  render() {
    return (
      <div>
        <h2>count:{this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
