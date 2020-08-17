import React, { Component } from "react";
import SingleCustom from "./singleCustom";

class CustomRollers extends Component {
  state = {
    custom: [
      { num: 3, type: 6, pm: "+", mod: 1 },
      { num: 2, type: 10, pm: "-", mod: 2 },
    ],
    currentRoll: 0,
    numDice: 0,
    diceType: 0,
    plusMinus: "+",
    modifier: 0,
  };

  addCustom = () => {
    const custom = [
      ...this.state.custom,
      {
        num: this.state.numDice,
        type: this.state.diceType,
        pm: this.state.plusMinus,
        mod: this.state.modifier,
      },
    ];
    this.setState({ custom });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <strong>Add custom rolls:</strong>
        <br />
        <form>
          <input
            name="numDice"
            type="number"
            min="0"
            max="100"
            value={this.state.numDice}
            onChange={this.handleChange}
          />
          <strong>d</strong>
          <input
            name="diceType"
            type="number"
            min="0"
            max="100"
            value={this.state.diceType}
            onChange={this.handleChange}
          />
          <input
            type="radio"
            id="+"
            name="plusMinus"
            value="+"
            checked={this.state.plusMinus === "+"}
            onChange={this.handleChange}
          />
          <label htmlFor="+">+</label>
          <input
            type="radio"
            id="-"
            name="plusMinus"
            value="-"
            checked={this.state.plusMinus === "-"}
            onChange={this.handleChange}
          />
          <label htmlFor="-">-</label>
          <input
            name="modifier"
            type="number"
            min="0"
            max="1000"
            value={this.state.modifier}
            onChange={this.handleChange}
          />
          <input type="button" onClick={this.addCustom} value="Add!" />
          <strong>{this.state.currentRoll}</strong>
        </form>
        <br />
        {this.state.custom.map((customRoll) => (
          <SingleCustom
            num={customRoll.num}
            dType={customRoll.type}
            pm={customRoll.pm}
            mod={customRoll.mod}
          />
        ))}
      </div>
    );
  }
}

export default CustomRollers;
