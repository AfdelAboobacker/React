import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const IncrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  
  return (
    <div>
      <button onClick={IncrementCounterOne}>CounterOne : {counterOne}</button>
      <span>{isEven ? "even" : "odd"}</span>
      <br /> <br />
      <button onClick={IncrementCounterTwo}>CounterTwo : {counterTwo}</button>
      <span>{isEven ? "even" : "odd"}</span>
    </div>
  );
};

export default UseMemo;
