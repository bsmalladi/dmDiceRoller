import React, { Component } from "react";
import "./App.css";
import DefaultRoller from "./components/defaultRoller";
import CustomRollers from "./components/customRollers";
import "bootstrap/dist/css/bootstrap.css";

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
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            {this.state.default.map((dType) => (
              <DefaultRoller key={dType.diceType} type={dType.diceType} />
            ))}
          </div>

          <div class="col-lg-6">
            <CustomRollers />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
