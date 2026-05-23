import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import api from "../config/axiosConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const router = useNavigate();
  const userData = useSelector((state) => state.auth.user);
  console.log(userData, "userData");
  const dispatch = useDispatch();

  const Logout = async () => {
    try {
      const response = await api.get("/auth/logout");
      if (response.data.success) {
        toast.success("Logout successful");
        dispatch(logout());
        router("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Logout failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "10%",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link style={{ cursor: "pointer" }} to="/">
          Logo
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          width: "50%",
          border: "1px solid black",
          justifyContent: "space-around",
        }}
      >
        {userData?.role == "user" && (
          <>
            <h4 style={{ cursor: "pointer" }} onClick={() => router("/all-products")}>
              Men
            </h4>
            <h4 style={{ cursor: "pointer" }} onClick={() => router("/")}>
              Women
            </h4>
            <h4 style={{ cursor: "pointer" }} onClick={() => router("/kids")}>
              Kids
            </h4>
            <h4 style={{ cursor: "pointer" }} onClick={() => router("/")}>
              Home
            </h4>
          </>
        )}

        {userData?.role == "seller" && (
          <>
            <h4
              style={{ cursor: "pointer" }}
              onClick={() => router("/add-products")}
            >
              Add Product
            </h4>

            <h4
              style={{ cursor: "pointer" }}
              onClick={() => router("/get-added-products")}
            >
              View Product
            </h4>
          </>
        )}
      </div>
      <div
        style={{
          display: "flex",
          width: "20%",
          border: "1px solid black",
          justifyContent: "space-around",
        }}
      >
        {userData && <h4>Hi, {userData?.name}</h4>}
        {userData && (
          <h4 style={{ cursor: "pointer" }} onClick={() => router("/profile")}>
            Profile
          </h4>
        )}
        {userData && <button onClick={Logout}>Logout</button>}
        {!userData && (
          <Link style={{ cursor: "pointer" }} to="/login">
            Login
          </Link>
        )}
        {!userData && (
          <Link style={{ cursor: "pointer" }} to="/register">
            Register
          </Link>
        )}
      </div>
    </div>
  );
}

// const { title, role } = props;

export default Navbar;
