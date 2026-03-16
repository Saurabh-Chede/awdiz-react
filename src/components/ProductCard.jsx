import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductCard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data, "response");
    setProducts(response.data);
  };

  return (
    <div>
      <button style={{ marginBottom: 20 }} onClick={fetchProducts}>
        click to fetch products
      </button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  border: "1px solid gray",
                  width: "200px",
                  padding: "10px",
                  height: "300px",
                  cursor: "pointer",
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
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
