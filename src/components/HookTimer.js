import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef=useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevstate) => prevstate + 1)
    }, 1000)

    return()=>{
        clearInterval(intervalRef.current);
    }
  }, []);
  return (
  <div>
   Hook- {timer}
    <button onClick={()=>clearInterval(intervalRef.current)}>clear</button>
  </div>
  )
}

export default HookTimer;
