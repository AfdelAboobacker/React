import React, { Component } from "react";

export default class UnMounting extends Component {
  state = {
    time: 0,
  };
  componentDidMount(){
    // start timer when component
    this.timer= setInterval(() => {
        this.setState(prevState=> ({
            time: prevState.time+1
        }))
    }, 1000)
    }
    componentWillUnmount(){
        // clean up the timer when the component unmount
        clearInterval(this.timer);
        console.log("Timer is cleaned up!");
        
    }
  render() {
    return (<div>
        <h1>time:{this.state.time} seconds</h1>
    </div>
    )
  }

}