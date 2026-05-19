import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../config/axiosConfig";

const GetAddedProducts = () => {
  const [products, setProducts] = useState([]);

  const getSellerAddedProduct = async () => {
    try {
      const response = await api.get("/seller/get-products");
      if (response.data.success) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getSellerAddedProduct();
  }, []);

  return (
    <div>
      <h1>Your Added Products</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "20%",
            border: "2px solid blue",
          }}
        >
          <h2>Filters</h2>
          <label>Sort</label>
          <br />
          <select>
            <option>Asc</option>
            <option>Dsc</option>
          </select>
          <br />
          <label>Price Range</label>
          <br />
          <input />
          <input />
          <br />
          <button>Apply</button>
        </div>
        <div
          style={{
            border: "2px solid red",
            width: "80%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              marginBottom: "30px",
            }}
          >
            {products.map((product) => (
              <div
                style={{
                  width: "23%",
                  height: "350px",
                  border: "1px solid black",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={product.image}
                  style={{ height: "80%", width: "100%", borderRadius: "10px" }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    height: "10%",
                  }}
                >
                  <p style={{ fontSize: "10px" }}>
                    Product Name: {product.name}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    Product Price: {product.price}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    Product Category: {product.category}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    Product Stock: {product.stock}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    Product Description: {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              margin: "auto",
            }}
          >
            <button>Prev</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAddedProducts;
