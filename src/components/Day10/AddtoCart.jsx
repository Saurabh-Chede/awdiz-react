import React, { useReducer } from "react";

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const exist = state.find(item => item.id === action.payload.id);
      if (exist) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, qty: 1 }];

    case "REMOVE":
      return state.filter(item => item.id !== action.payload);

    case "INCREMENT":
      return state.map(item =>
        item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item
      );

    case "DECREMENT":
      return state.map(item =>
        item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );

    default:
      return state;
  }
};

const products = [
  { id: 1, name: "Shirt" },
  { id: 2, name: "Shoes" },
  { id: 3, name: "Watch" }
];

const CartApp = () => {
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Shopping Cart</h2>

      {/* Product List */}
      {products.map(product => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button onClick={() => dispatch({ type: "ADD", payload: product })}>
            Add
          </button>
        </div>
      ))}

      <hr />

      {/* Cart Items */}
      <h3>Cart</h3>
      {cart.map(item => (
        <div key={item.id}>
          <span>
            {item.name} (Qty: {item.qty})
          </span>

          <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}>
            +
          </button>

          <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}>
            -
          </button>

          <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>
            ❌
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartApp;