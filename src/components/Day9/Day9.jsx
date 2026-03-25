import React, { useState, useCallback } from "react";
import UseRef from "./UseRef";

const Child = React.memo(({ onClick }) => {
  console.log("Child component rendered");
  return <button onClick={onClick}>Child component</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback( () => {
    console.log("child btn re-rendered");
  },[]); // dependency array

  return (
    <div>
      <h1>useCallback = function cache</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;