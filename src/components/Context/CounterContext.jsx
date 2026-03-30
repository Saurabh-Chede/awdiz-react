import { createContext, useReducer, useState } from "react";

export const CounterContext = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    case "RESET":
      return { counter: 111 };
    default:
      return state;
  }
}

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(1);

  const [state, dispatch] = useReducer(Reducer, { counter: 111 });
  return (
    <CounterContext.Provider value={{ counter, setCounter, state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;