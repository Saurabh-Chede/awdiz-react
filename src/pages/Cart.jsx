import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../config/axiosConfig";
import { useNavigate } from "react-router";

const Cart = () => {
  const router = useNavigate();
  const [products, setProducts] = useState([]);

  const getSellerAddedProduct = async () => {
    try {
      const response = await api.get("/user/get-cart-products");

      if (response.data.success) {
        setProducts(response.data.userProductsData.products);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    getSellerAddedProduct();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "35px",
          color: "#333",
        }}
      >
        My Cart
      </h1>

      <div
        style={{
          width: "95%",
          margin: "auto",
        }}
      >
        {/* Products Section */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {products.map((product) => (
              <div
                key={product._id}
                onClick={() => router(`/single-product/${product._id}`)}
                style={{
                  width: "250px",
                  backgroundColor: "white",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    height: "220px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Product Details */}
                <div
                  style={{
                    padding: "15px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "18px",
                      marginBottom: "10px",
                      color: "#222",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    ₹ {product.price}
                  </p>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      marginBottom: "5px",
                    }}
                  >
                    Category: {product.category}
                  </p>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      marginBottom: "5px",
                    }}
                  >
                    Stock: {product.stock}
                  </p>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "#777",
                    }}
                  >
                    {product.description?.slice(0, 60)}...
                  </p>

                  {/* Buttons */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "15px",
                    }}
                  >
                    <button
                      style={{
                        padding: "8px 12px",
                        border: "none",
                        borderRadius: "8px",
                        backgroundColor: "black",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      Buy Now
                    </button>

                    <button
                      style={{
                        padding: "8px 12px",
                        border: "none",
                        borderRadius: "8px",
                        backgroundColor: "red",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "250px",
              margin: "30px auto 0px auto",
            }}
          >
            <button
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#333",
                color: "white",
                cursor: "pointer",
              }}
            >
              Prev
            </button>

            <button
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#333",
                color: "white",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;