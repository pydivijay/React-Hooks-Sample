import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispath] = useReducer(reducer, initialState);
  const [countTwo,dispathTwo]=useReducer(reducer, initialState);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispath("increment")}>Increment</button>
      <button onClick={() => dispath("decrement")}>Decrement</button>
      <button onClick={() => dispath("reset")}>Reset</button>
      <div>{countTwo}</div>
      <button onClick={() => dispathTwo("increment")}>Increment</button>
      <button onClick={() => dispathTwo("decrement")}>Decrement</button>
      <button onClick={() => dispathTwo("reset")}>Reset</button>
    </div>
  );
}

export default CounterThree;
