import React, { useState } from "react";
import axios from "axios";

function ProductCard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data, "response");
    setProducts(response.data);
  };

  return (
    <div>
      <button style={{marginBottom:20}} onClick={fetchProducts}>click to fetch products</button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                border: "1px solid gray",
                width: "200px",
                padding: "10px",
                height:'300px'
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100px" }}
              />

              <h4>{product.title}</h4>

              <p>₹ {product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
