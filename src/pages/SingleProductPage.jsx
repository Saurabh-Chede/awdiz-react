import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../config/axiosConfig";
import toast from "react-hot-toast";

const SingleProduct = () => {
  const router = useNavigate();
  const [productData, setProductData] = useState(null);
  const { id } = useParams();

  async function getSingleProductData(productId) {
    try {
      const response = await api.get(`/product/single-product/${productId}`);

      if (response.data.success) {
        setProductData(response.data.product);
      }
    } catch (error) {
      console.log(error, "error while fetching single product data");
    }
  }

  const addToCart = async () => {
    try {
      const response = await api.post("/user/add-to-cart", {
        productId: id,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        router("/cart");
      }
    } catch (error) {
      console.log(error, "error while adding to cart");
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (id) {
      getSingleProductData(id);
    }
  }, [id]);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      {productData ? (
        <div
          style={{
            width: "90%",
            maxWidth: "1200px",
            backgroundColor: "white",
            borderRadius: "20px",
            display: "flex",
            gap: "30px",
            padding: "30px",
            boxShadow: "0px 5px 20px rgba(0,0,0,0.15)",
            flexWrap: "wrap",
          }}
        >
          {/* Left Side Image */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fafafa",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <img
              style={{
                width: "100%",
                maxHeight: "500px",
                objectFit: "contain",
                borderRadius: "10px",
              }}
              src={productData?.image || ""}
              alt={productData?.name}
            />
          </div>

          {/* Right Side Details */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontSize: "35px",
                marginBottom: "20px",
                color: "#222",
              }}
            >
              {productData?.name || "Product Name"}
            </h1>

            <h2
              style={{
                fontSize: "28px",
                color: "green",
                marginBottom: "20px",
              }}
            >
              ₹ {productData?.price || ""}
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#555",
                lineHeight: "28px",
                marginBottom: "20px",
              }}
            >
              {productData?.description ||
                "No description available for this product."}
            </p>

            <div
              style={{
                marginBottom: "15px",
                fontSize: "16px",
                color: "#444",
              }}
            >
              <strong>Category:</strong> {productData?.category}
            </div>

            <div
              style={{
                marginBottom: "30px",
                fontSize: "16px",
                color: "#444",
              }}
            >
              <strong>Stock:</strong> {productData?.stock}
            </div>

            {/* Buttons */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={addToCart}
                style={{
                  padding: "14px 25px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                Add To Cart
              </button>

              <button
                onClick={() => router("/cart")}
                style={{
                  padding: "14px 25px",
                  backgroundColor: "#ff9800",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Go To Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1
          style={{
            fontSize: "35px",
            color: "#444",
          }}
        >
          Loading...
        </h1>
      )}
    </div>
  );
};

export default SingleProduct;