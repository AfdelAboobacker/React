import React, { useEffect, useState } from "react";

const Timer = () => {
  const [second, setSeconds] = useState(0);

  useEffect(() => {
    const intervel = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    // set intervel Craete a timer that runs every 100 milliseconds (1 seconds)

    // clean up function
    return () => clearInterval(intervel);
  }, []); //empty dependency -runs once on mount

  return (
    <div>
      <p>Timer:{second}</p>
    </div>
  );
};

export default Timer;
