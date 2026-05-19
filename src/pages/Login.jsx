import { useState } from "react";
import api from "../config/axiosConfig";
import { login } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const router = useNavigate()
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ email: "", password: "" });
  console.log(userData, "userData");

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      if (!userData?.email || !userData?.password) {
        return alert("All fields are required.");
      }
      event.preventDefault();
      const response = await api.post("/auth/login", userData);

      console.log(response, "response");
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        dispatch(login(response?.data?.user));
        router('/')
      }
    } catch (error) {
      console.log(error.response.data.message, "error");
      alert(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email - {userData.email}</label>
        <br />
        <input
          name="email"
          onChange={handleChange}
          required
          type="email"
          placeholder="abc@gmail.com"
        />{" "}
        <br />
        <label>Password - {userData.password}</label>
        <br />
        <input
          name="password"
          onChange={handleChange}
          required
          type="password"
          placeholder="Enter your password."
        />{" "}
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
