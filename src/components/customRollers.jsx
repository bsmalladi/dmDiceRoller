import React, { Component } from "react";
import SingleCustom from "./singleCustom";

class CustomRollers extends Component {
  state = {
    custom: [
      { num: 3, type: 6 },
      { num: 2, type: 10 },
    ],
    currentRoll: 0,
  };

  render() {
    return (
      <div>
        {this.state.custom.map((customRoll) => (
          <SingleCustom num={customRoll.num} dType={customRoll.type} />
        ))}
      </div>
    );
  }
}

export default CustomRollers;
