import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Count: {state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

      <button
        onClick={() => dispatch({ type: "decrement" })}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "reset" })}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}
