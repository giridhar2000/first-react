import React, { Component } from "react";
import MyComponent from "./hoc";

class App extends Component {
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.func}>increase</button>
        <button onClick={this.props.fun}>decrease</button>
      </div>
    );
  }
}

export default MyComponent(App);
