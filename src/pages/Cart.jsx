import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../config/axiosConfig";
import { useNavigate } from "react-router";

const Cart = () => {
  const router = useNavigate();
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponCode, setCouponCode] = useState("");

  const getSellerAddedProduct = async () => {
    try {
      const response = await api.get("/user/get-cart-products");

      if (response.data.success) {
        setProducts(response.data.userProductsData.products);
        setTotalPrice(response.data.totalPrice);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const applyCoupon = async () => {
    try {
      const response = await api.post("/user/apply-coupon", {
        couponCode,
        totalPrice,
      });

      if (response.data.success) {
        setTotalPrice(response.data.finalPrice);
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const placeOrder = async () => {
    try {
      const response = await api.post("/user/place-orders", {
        totalPrice,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        router("/orders");
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
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Cart
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            border: "1px solid #ddd",
            width: "70%",
            borderRadius: "15px",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            {products.map((product) => (
              <div
                onClick={() => router(`/single-product/${product._id}`)}
                style={{
                  width: "100%",
                  minHeight: "140px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  cursor: "pointer",
                  display: "flex",
                  padding: "15px",
                  gap: "20px",
                  backgroundColor: "#fafafa",
                  transition: "0.3s",
                  boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={product.image}
                  style={{
                    height: "110px",
                    width: "120px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      margin: "0",
                      color: "#222",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p style={{ margin: "4px 0", color: "#555" }}>
                    Price: ₹{product.price}
                  </p>

                  <p style={{ margin: "4px 0", color: "#555" }}>
                    Category: {product.category}
                  </p>

                  <p style={{ margin: "4px 0", color: "#555" }}>
                    Stock: {product.stock}
                  </p>

                  <p
                    style={{
                      margin: "4px 0",
                      color: "#777",
                      fontSize: "14px",
                    }}
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
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

        {/* Right Side */}
        <div
          style={{
            width: "28%",
            border: "1px solid #ddd",
            borderRadius: "15px",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            position: "sticky",
            top: "20px",
          }}
        >
          <h2
            style={{
              marginBottom: "15px",
              color: "#222",
            }}
          >
            Price Details
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            <span>Total Price</span>
            <span>₹{totalPrice}</span>
          </div>

          <hr />

          <h3 style={{ marginTop: "20px", color: "#333" }}>Apply Coupon</h3>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <input
              placeholder="Type your coupon"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            />

            <button
              onClick={applyCoupon}
              style={{
                padding: "10px 15px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "green",
                color: "white",
                cursor: "pointer",
              }}
            >
              Apply
            </button>
          </div>

          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#f8f8f8",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <h4 style={{ marginBottom: "10px" }}>Coupons for you</h4>

            <p
              style={{
                backgroundColor: "#e8f5e9",
                padding: "8px",
                borderRadius: "6px",
                marginBottom: "8px",
              }}
            >
              OFF25
            </p>

            <p
              style={{
                backgroundColor: "#e3f2fd",
                padding: "8px",
                borderRadius: "6px",
              }}
            >
              OFF50
            </p>
          </div>

          <button
            onClick={placeOrder}
            style={{
              width: "100%",
              marginTop: "25px",
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#ff6b00",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
