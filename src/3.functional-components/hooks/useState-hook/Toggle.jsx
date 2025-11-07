import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "on" : "off"}</button>
    </div>
  );
};

export default Toggle;
