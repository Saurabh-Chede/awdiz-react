import { useState } from "react";
import { useMemo } from "react";
import UseCallback from "./UseCallback";
function Memoizing() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const output = useMemo(() => lengthyOperation(counter), [counter]);

  return (
    <div>
      <p>
        useMemo = value cache <br />
         It avoids re-running heavy calculations 
         <br /> Runs only
        when dependency changes
      </p>
       <h1>Lengthy Operation value : {output}</h1>
      <h1>counter:{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+increament</button>
      <h1>Counter 2 : {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>+ for counter 2</button>
      <hr style={{marginBottom:20}} />
      <UseCallback></UseCallback>
    </div>
  );
}

function lengthyOperation(counter) {
  for (let i = 0; i < 1000000000; i++) {
    counter++;
  }
  console.log("inside lengthy operation", counter);
  return counter;
}

export default Memoizing;
