import React, { useEffect, useState } from "react";
import api from "../../config/axiosConfig";

function SellerDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const getSellerDashboardData = async () => {
    try {
      const response = await api.get("/seller/dashboard");
      if (response?.data?.success) {
        setDashboardData(response?.data?.data);
      }
    } catch (error) {
      console.log(error, "error fetching seller dashboard-data");
    }
  };

  useEffect(() => {
    getSellerDashboardData();
  }, []);
  return (
    <div>
      <h1>Seller Dashboard</h1>
      <h2>Total Products {dashboardData?.productsCount}</h2>
      <h2>Total Orders {dashboardData?.ordersCount}</h2>
      <h2>Orders List :</h2>

      <div>
        {dashboardData?.orders.map((order) => (
          <div
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              display: "flex",
            }}
          >
            {order.products.map((product) => (
              <div>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={product.image}
                  alt={product.name}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellerDashboard;
