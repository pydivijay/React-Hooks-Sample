import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, ssetCount] = useState(0);
  const tick = () => {
    ssetCount(prevState=> prevState+ 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{count}</div>;
}

export default IntervalHookCounter;
