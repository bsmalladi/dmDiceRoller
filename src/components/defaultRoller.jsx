import React, { Component } from "react";

class DefaultRoller extends Component {
  state = {
    numDice: 0,
    plusMinus: "+",
    modifier: 0,
    currentRoll: 0,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  rollDice = () => {
    let newRoll = 0;
    var i;
    for (i = 0; i < this.state.numDice; ++i) {
      newRoll += Math.floor(Math.random() * this.props.type) + 1;
    }
    newRoll +=
      this.state.plusMinus === "+"
        ? 1 * this.state.modifier
        : -1 * this.state.modifier;
    this.setState({ currentRoll: newRoll });
  };

  render() {
    return (
      <form>
        <input
          name="numDice"
          type="number"
          min="0"
          max="100"
          value={this.state.numDice}
          onChange={this.handleChange}
        />
        <strong>d{this.props.type}</strong>
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
        <input type="button" onClick={this.rollDice} value="Roll!" />
        <strong>{this.state.currentRoll}</strong>
      </form>
    );
  }
}

export default DefaultRoller;
