import React, {useState} from "react";

const Display = () => {
  const[displayNumber, setDisplayNumber] = useState(0);

  return <div className="display">
    {displayNumber}
  </div>;
};
export default Display;