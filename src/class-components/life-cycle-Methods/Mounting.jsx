// Mounting: The component is created and inserted into the DOM.
import React, { Component } from 'react'

export default class Mounting extends Component {
    componentDidMount(){//life cycle methode ,which automatically called when componenet is mount
console.log("component mounted");

    }
  render() {
    return <p>Component has been mounted</p>
  }
}
