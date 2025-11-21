import React, { useRef, useState } from "react";

export default function Player() {
  var playerRef = useRef();
  const [player, setPlayer] = useState("");

  function handleButtonOnClick() {
    setPlayer(playerRef.current.value);
    playerRef.current.value=" "
  }

  return (
    <section id="player">
      <h2>welcome to {player ?? "user"}</h2>
      <p>
        <input ref={playerRef} type="text" />
        <button onClick={handleButtonOnClick}>set Name</button>
      </p>
    </section>
  );
}
