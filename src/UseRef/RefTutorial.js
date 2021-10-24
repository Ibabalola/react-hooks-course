import React, { useRef, useState } from "react";
import { FormInput, Button } from '@capgeminiuk/dcx-react-library';

function RefTutorial() {
  const [ name, setName ] = useState('Pedro');
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const onChange = (event) => {
    setName(event.currentTarget.value);
  }

  return (
    <div>
      <h1>{name}</h1>
      <FormInput type="text" placeholder="Ex..." inputProps={{ ref: inputRef }} onChange={onChange}/>
      <Button label="Change Name" onClick={onClick}/>
    </div>
  );
}

export default RefTutorial;
