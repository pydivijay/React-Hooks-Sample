import React, { useState } from "react";

function HookCounterTwo() {
  const initialcount = 0;
  const [count, setCount] = useState(initialcount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((preCount) => preCount + 1);
    }
  };
  return (
    <div>
      count:{count}
      <button onClick={() => setCount(initialcount)}>Reset</button>
      <button onClick={() => setCount((preCount) => preCount + 1)}>Increment</button>
      <button onClick={() => setCount((preCount) => preCount - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
