import React, { useState } from "react";
import { numbers } from "../../../data";

const getButtonClass = props => {
  console.log(props);
  if (props.button === "0") {
    return "zeroButton";
  } else {
    return "buttonStyle";
  }
};

const NumberButton = props => {
  return <button className={getButtonClass(props)}>{props.button}</button>;
};

export default function NumberButtonRender() {
  const [numberButtons, setNumberButtons] = useState(numbers);

  return (
    <div>
      {numberButtons.map((buttonValue, index) => {
        return (
          <NumberButton
            key={index}
            button={buttonValue}
            selectButton={setNumberButtons}
          />
        );
      })}
    </div>
  );
}
