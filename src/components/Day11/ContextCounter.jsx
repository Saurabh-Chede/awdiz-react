import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

const ContextCounter = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h1>Counter from Context reducer : {state.counter}</h1>
      <div style={{ display: "flex", gap: 20 }}>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          + INCREMENT
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          - DECREMENT
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};

export default ContextCounter;
