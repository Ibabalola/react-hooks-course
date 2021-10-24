import React, { useState } from "react";
import { FormInput } from "@capgeminiuk/dcx-react-library";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <FormInput placeholder="enter text" onChange={onChange}/>
      {inputValue}
    </div>
  );
};

export default StateTutorial;
