import React, { memo } from "react";

const ChildComponent = ({ counter2, setCounter2 }) => {
  console.log("Child component re-rendered..");
  return (
    <div>
      <h1>ChildComponent</h1>
      <h1>Counter 2 : {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>+ for counter 2</button>
    </div>
  );
};

export default memo(ChildComponent);