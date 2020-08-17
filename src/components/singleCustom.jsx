import React, { Component } from "react";

class SingleCustom extends Component {
  state = {
    currentRoll: 0,
  };

  rollDice = () => {
    let newRoll = 0;
    var i;
    for (i = 0; i < this.props.num; ++i) {
      newRoll += Math.floor(Math.random() * this.props.dType) + 1;
    }
    newRoll += (this.props.pm === "+" ? 1 : -1) * this.props.mod;
    this.setState({ currentRoll: newRoll });
  };
  render() {
    return (
      <div>
        <strong>
          {this.props.num}d{this.props.dType}
          {this.props.pm}
          {this.props.mod}
        </strong>
        <button onClick={this.rollDice}>Roll!</button>
        <strong>{this.state.currentRoll}</strong>
      </div>
    );
  }
}

export default SingleCustom;
