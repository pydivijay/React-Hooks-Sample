import React, { useReducer } from "react";

const initialState = {
  firstIncrement: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstIncrement: state.firstIncrement + action.value };
    case "decrement":
      return { ...state, firstIncrement: state.firstIncrement - action.value };
    case "increment5":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement5":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispath] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count 1--{count.firstIncrement}</div>
      <div>Count 2 --{count.secondCounter}</div>
      <button onClick={() => dispath({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispath({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispath({ type: "increment5", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispath({ type: "decrement5", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispath({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterTwo;
