import React, {useState} from "react";
import {numbers} from "../../../data";

const NumberButton = (props) => {
  
  return (
    <button className = "buttonStyle">
      {props.button}
    </button>
  );
};

export default function NumberButtonRender() {
  const[numberButtons, setNumberButtons] = useState(numbers);

  return(
    <div>
      {numberButtons.map((buttonValue, index) => {
        return(
          <NumberButton
            key = {index}
            button = {buttonValue}
            selectButton = {setNumberButtons}
          />
        )
      })}
    </div>
  );
}


