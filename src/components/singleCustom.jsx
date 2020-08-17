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
    this.setState({ currentRoll: newRoll });
  };
  render() {
    return (
      <div>
        <strong>
          {this.props.num}d{this.props.dType}
        </strong>
        <button onClick={this.rollDice}>Roll!</button>
        <strong>{this.state.currentRoll}</strong>
      </div>
    );
  }
}

export default SingleCustom;
