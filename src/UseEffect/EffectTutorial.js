import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@capgeminiuk/dcx-react-library"

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <Button
        label="Click"
        onClick={() => {
          setCount(count + 1);
        }}
      />
    </div>
  );
}

export default EffectTutorial;
