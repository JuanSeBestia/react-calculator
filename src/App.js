import React, { Component } from "react";
import "./App.css";

import * as math from "mathjs";
import Calculator from "./components/Calculator";
import ClearButton from "./components/ClearButton";

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
  whatShow = () => {
    if (this.state.input == "42") return "god";
    else if (this.state.input == "666") return "devil";
    else return "calculator";
  };

  render() {
    const whatShowValue = this.whatShow();
    return (
      <>
        <div className="app">
          {whatShowValue == "calculator" && (
            <Calculator
              input={this.state.input}
              addToInput={this.addToInput}
              handleEqual={this.handleEqual}
              handleMultiply={this.handleMultiply}
              handleClear={this.handleClear}
            />
          )}
          {whatShowValue == "god" && (
            <div class="calculator-wrapper">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Touched_by_His_Noodly_Appendage_HD.jpg" />
              <p> Image extracted from wikipedia site</p>
              <div className="row">
                <ClearButton handleClear={this.handleClear}>clear</ClearButton>
              </div>
            </div>
          )}
          {whatShowValue == "devil" && (
            <div class="calculator-wrapper">
              <img src="https://image.myanimelist.net/ui/_3fYL8i6Q-n-155t3dn_4kJzuwmYmgtLso3qp8x0lDUv-Il7reD20Fy0sxMAdK3w" />
              <p> Image extracted from myanimelist site</p>
              <div className="row">
                <ClearButton handleClear={this.handleClear}>clear</ClearButton>
              </div>
            </div>
          )}
        </div>
        <div>
          Powered by <a href="github.com/tayloracox">github.com/tayloracox</a>
          {" and "}<a href="github.com/JuanSeBestia">github.com/JuanSeBestia</a>
        </div>
      </>
    );
  }
}

export default App;
