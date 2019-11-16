import React, {useState} from "react";
import {specials} from "../../../data";

const SpecialButton = (props) => {
  
  return (
    <button className="specialButtonStyle">
      {props.button}
    </button>
  );
};

export default function SpecialButtonRender() {
  const[specialButtons, setSpecialButtons] = useState(specials);

  return(
    <div>
      {specialButtons.map((buttonValue, index) => {
        return(
          <SpecialButton
            key = {index}
            button = {buttonValue}
            selectButton = {setSpecialButtons}
          />
        )
      })}
    </div>
  );
}
