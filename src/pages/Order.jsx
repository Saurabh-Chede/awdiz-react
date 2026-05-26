import { useEffect, useState } from "react";
import api from "../config/axiosConfig";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(orders, "orders");
  const getOrders = async () => {
    try {
      const response = await api.get("/user/get-orders");
      if (response.data.success) {
        setOrders(response.data.orders);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Orders</h1>
      <div>
        {orders.map((order) => (
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
            <p>Total Price: {order.totalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;