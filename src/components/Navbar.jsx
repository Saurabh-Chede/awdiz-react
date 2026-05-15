import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
        backgroundColor: "#fff9c4", // light yellow
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        fontFamily: "sans-serif",
      }}
    >
      <h3 style={{ margin: 0 }}>SAURABH</h3>

      <div style={{ display: "flex", gap: "20px" }}>
        <NavLink to={"/"} style={{ textDecoration: "none", color: "#333" }}>
          Home
        </NavLink>
        <NavLink to={"/todo"} style={{ textDecoration: "none", color: "#333" }}>
          todo
        </NavLink>
      </div>
    </nav>
  );
}
