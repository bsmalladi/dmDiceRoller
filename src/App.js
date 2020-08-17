import React, { Component } from "react";
import "./App.css";
import DefaultRoller from "./components/defaultRoller";
import CustomRollers from "./components/customRollers";

class App extends Component {
  state = {
    default: [
      { diceType: 4 },
      { diceType: 6 },
      { diceType: 8 },
      { diceType: 10 },
      { diceType: 12 },
      { diceType: 20 },
      { diceType: 100 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.default.map((dType) => (
          <DefaultRoller key={dType.diceType} type={dType.diceType} />
        ))}
        <CustomRollers />
      </div>
    );
  }
}

export default App;
