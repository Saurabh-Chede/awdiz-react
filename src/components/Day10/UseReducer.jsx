import React, { act, useReducer, useState } from "react";
import CartApp from './AddtoCart'

function reducer(state, action) {
  console.log(state, "state");
  console.log(action, "action");
  //   if (action.type == "increment") {
  //     return { ...state, counter: state.counter + 1 };
  //   } else if (action.type == "decrement") {
  //     return { ...state, counter: state.counter - 1 };
  //   } else if (action.type == "reset") {
  //     return { ...state, counter: 101 };
  //   }
  //   return state;

  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    case "reset":
      return { ...state, counter: 1 };
    default:
      return state;
  }
} //Logic to handle state

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 1,
    counter2: 102,
  });
  return (
    <div>
      <h1>Reducer Counter : {state.counter}</h1>
      <button style={{marginLeft:20}} onClick={() => dispatch({ type: "increment" })}>
        Increement
      </button>
      <button style={{marginLeft:20}} onClick={() => dispatch({ type: "decrement" })}>
        Decreement
      </button>
      <button style={{marginLeft:20}} onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <hr />
      <CartApp/>
    </div>
  );
};

export default UseReducer;