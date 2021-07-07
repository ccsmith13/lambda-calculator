import React, {useState} from "react";
import {operators} from "../../../data";

const OperatorButton = (props) => {
  
  return (
    <button className="operationButtonStyle">
      {props.button.char}
    </button>
  );
};

export default function OperatorButtonRender() {
  const[operatorButtons, setOperatorButtons] = useState(operators);

  return(
    <div>
      {operatorButtons.map((buttonValue, index) => {
        return(
          <OperatorButton
            key = {index}
            button = {buttonValue}
            selectButton = {setOperatorButtons}
          />
        )
      })}
    </div>
  );
}
