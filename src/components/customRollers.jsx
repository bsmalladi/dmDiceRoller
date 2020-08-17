import React, { Component } from "react";

class CustomRollers extends Component {
  state = {
    custom: [
      { num: 3, type: 6 },
      { num: 2, type: 10 },
    ],
    currentRoll: 0,
  };

  rollCustom = () => {
    let newRoll = 0;
    var i;
    for (i = 0; i < 3; ++i) {
      newRoll += Math.floor(Math.random() * 6) + 1;
    }
    this.setState({ currentRoll: newRoll });
  };

  render() {
    return (
      <div>
        <strong>3d6</strong>
        <button onClick={this.rollCustom}>Roll!</button>
        {this.state.currentRoll}
      </div>
    );
  }
}

export default CustomRollers;
