import React, { Component } from 'react'

export default class Counter extends Component {
  // step 1:initialise the state 
  constructor(props){
        super(props);
        this.state={count : 0};
    }
    // modifying state 
    increment=()=>{
        this.setState({count : this.state.count+1})
    }
     decrement=()=>{
        this.setState({count : this.state.count-1})
    }
    // rendering ui
  render() {
    return (
      <div>
        
        <h2>count :{this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
