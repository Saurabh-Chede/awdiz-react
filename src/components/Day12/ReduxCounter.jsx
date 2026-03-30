import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../redux/counterSlice";

const ReduxCounter = () => {
  const counterValue = useSelector((state) => state.counter.counterValue);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter from redux : {counterValue}</h1>
      <div style={{display:'flex',gap:'20px'}}>
        <button onClick={() => dispatch(increment())}>+ increment</button>
        <button onClick={() => dispatch(decrement())}>- decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default ReduxCounter;
