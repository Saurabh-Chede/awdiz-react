import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import SingleProductPage from "./pages/SingleProductPage";
import ContextCounter from "./components/Day11/ContextCounter";
import ReduxCounter from "./components/Day12/ReduxCounter";
import Todo from "./components/Day14/Todo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProducts from "./pages/seller/AddProducts";
import GetAddedProducts from "./pages/seller/GetAddedProducts";
import Profile from "./pages/Profile";

import { useEffect } from "react";
import api from "./config/axiosConfig";
import { useDispatch } from "react-redux";
import { login } from "./redux/authSlice";
import Products from './pages/Products'
import Cart from './pages/Cart'
import Order from './pages/Order'
import SellerDashboard from "./pages/seller/SellerDashboard"

export default function App() {
  const dispatch = useDispatch();

  const getLoggedInUser = async () => {
    try {
      const response = await api.get("/auth/get-current-user");

      if (response.data.success) {
        dispatch(login(response.data.user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Navbar />

      <div style={{ flex: 1, padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/context-counter" element={<ContextCounter />} />
          <Route path="/redux-counter" element={<ReduxCounter />} />
          <Route path="/profile" element={<Profile />} />

          {/* Seller routes */}
          <Route path="seller/dashboard" element={<SellerDashboard />} />
          <Route path="/add-products" element={<AddProducts />} />
          <Route path="/get-added-products" element={<GetAddedProducts />} />
          <Route path="/all-products" element={<Products/>} />
          <Route path="/single-product/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Order/>}/>
          <Route path="/todo" element={<Todo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
