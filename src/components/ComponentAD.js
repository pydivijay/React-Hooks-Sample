import React, { useContext } from "react";
import { CounterContext } from "../App";

function ComponentAD() {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      {/* Component A<div>{counterContext.counterVal}</div> */}
      <button onClick={() => counterContext.counterDispath("increment")}>Increment</button>
      <button onClick={() => counterContext.counterDispath("decrement")}>Decrement</button>
      <button onClick={() => counterContext.counterDispath("reset")}>Reset</button>
    </div>
  );
}

export default ComponentAD;
