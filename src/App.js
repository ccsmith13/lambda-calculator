import React from "react";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import NumberButtonRender from "./components/ButtonComponents/NumberButtons/NumberButton";
import OperatorButtonRender from "./components/ButtonComponents/OperatorButtons/OperatorButton";
import SpecialButtonRender from "./components/ButtonComponents/SpecialButtons/Specials";


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <div className="App">
        <Logo />
        <div className="displayContainer">
          <Display />
        </div>
        <div className = "leftSideCalc">
          <SpecialButtonRender />
          <NumberButtonRender />
        </div>

        <div className="rightSideCalc">
          <OperatorButtonRender />
        </div>

      </div>
    </div>
  );
}

export default App;
