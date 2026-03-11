import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncreament = () => {
    setCounter(counter + 1);
  };

  const handleDecreament = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  };

  const Reset = () => {
    setCounter(0);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Count : {counter}</h1>
      <div style={{display:'flex',gap:'10px'}}>
        <button onClick={handleIncreament}>Increament</button>
        <button onClick={handleDecreament}>Decreament</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
