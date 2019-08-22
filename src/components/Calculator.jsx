import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { ClearButton } from "./ClearButton";

const Calculator = props => {
  return (
    <div className="calculator-wrapper">
      <Input input={props.input} />
      <div className="row">
        <Button handleClick={props.addToInput}>7</Button>
        <Button handleClick={props.addToInput}>8</Button>
        <Button handleClick={props.addToInput}>9</Button>
        <Button handleClick={props.handleMultiply}>x</Button>
      </div>
      <div className="row">
        <Button handleClick={props.addToInput}>4</Button>
        <Button handleClick={props.addToInput}>5</Button>
        <Button handleClick={props.addToInput}>6</Button>
        <Button handleClick={props.addToInput}>-</Button>
      </div>
      <div className="row">
        <Button handleClick={props.addToInput}>1</Button>
        <Button handleClick={props.addToInput}>2</Button>
        <Button handleClick={props.addToInput}>3</Button>
        <Button handleClick={props.addToInput}>+</Button>
      </div>
      <div className="row">
        <Button handleClick={props.addToInput}>0</Button>
        <Button handleClick={props.addToInput}>.</Button>
        <Button handleClick={() => props.handleEqual()}>=</Button>
        <Button handleClick={props.addToInput}>/</Button>
      </div>
      <div className="row">
        <ClearButton handleClear={props.handleClear}>
          clear
        </ClearButton>
      </div>
    </div>
  );
};
export default Calculator;
