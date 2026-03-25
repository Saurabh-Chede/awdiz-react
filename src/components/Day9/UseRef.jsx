import React, { useRef, useState } from "react";

const UseRef = () => {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");
  console.log("Component re-render..");

  const data = useRef(8765);

  console.log("Current Ref Value:", data.current);

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#333" }}>
        useRef Demo
      </h1>

      <p>
        "useRef is used to store mutable values that persist across renders
        without causing a re-render."
      </p>

      {/* Counter Card */}
      <div style={cardStyle}>
        <h2>Counter: {counter}</h2>
        <button
          style={buttonStyle}
          onClick={() => {
            console.log("State Updated → Component will re-render");
            setCounter(counter + 1);
          }}
        >
          Increase
        </button>
      </div>

      {/* Name Card */}
      <div style={cardStyle}>
        <h2>Name: {name}</h2>
        <input
          placeholder="Enter name"
          onChange={(e) => {
            console.log("Name Changed → Re-render");
            setName(e.target.value);
          }}
          style={inputStyle}
        />
      </div>

      {/* Ref Counter Card */}
      <div style={cardStyle}>
        <h2>Ref Counter: {data.current}</h2>
        <button
          style={buttonStyle}
          onClick={() => {
            data.current = data.current + 1;
            console.log("Ref Updated (No Re-render):", data.current);
          }}
        >
          Increase Ref
        </button>
      </div>
    </div>
  );
};

const cardStyle = {
  background: "#fff",
  padding: "20px",
  marginBottom: "15px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
};

const buttonStyle = {
  marginTop: "10px",
  padding: "8px 16px",
  border: "none",
  borderRadius: "8px",
  background: "#007bff",
  color: "#fff",
  cursor: "pointer",
};

const inputStyle = {
  marginTop: "10px",
  padding: "8px",
  width: "80%",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

export default UseRef;