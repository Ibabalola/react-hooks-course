import React, { useReducer } from "react";
import { Button } from "@capgeminiuk/dcx-react-library";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "toggleShowText":
      return { ...state, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <Button
        label="Click Here"
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      />
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
