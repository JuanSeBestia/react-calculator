import React, { Component } from "react";
import "./App.css";

import * as math from "mathjs";
import Calculator from "./components/Calculator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: math.eval(this.state.input) });
  };

  handleMultiply = val => {
    if (val === "x") {
      this.setState({ input: this.state.input + val.replace("x", "*") });
    }
  };
  handleClear = () => {
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="app">
        <Calculator
          input={this.state.input}
          addToInput={this.addToInput}
          handleEqual={this.handleEqual}
          handleMultiply={this.handleMultiply}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
