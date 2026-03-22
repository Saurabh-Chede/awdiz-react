import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallback = () => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(12);
  return (
    <div>
      <p>memo() is used to prevent unnecessary re-render of a component</p>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+counter</button>
      <ChildComponent counter2={counter2} setCounter2={setCounter2} />
    </div>
  );
};

export default UseCallback;