import React, { useState } from "react";

const State = () => {
  // state initialisation using useState hook
  const [time, setTime] = useState(0);
  //function to increment the timer
  const incrementTime = () => {
    setTime(time +1);
  };
  return <div>
    <h1>time:{time}secons</h1>
    <button onClick={incrementTime}>Increment time</button>
  </div>;
};

export default State;
