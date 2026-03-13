import { useState } from "react";

export default function EventHandling() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "user",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log(formData);
    // setFormData({
    //   name: "",
    //   email: "",
    //   password: "",
    //   confirmpassword: "",
    //   role: "user",
    // });
  };

  console.log(formData);
  return (
    <div>
      <h1>Login</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          id="name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          id="password"
          required
        />

        <label htmlFor="confirmpassword">confirmPassword</label>
        <input
          type="password"
          name="confirmpassword"
          value={formData.confirmpassword}
          onChange={handleChange}
          id="confirmpassword"
          required
        />

        <label htmlFor="role">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          id="role"
        >
          <option>User</option>
          <option>Admin</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          {" "}
          <h3>Displaying Results</h3> <p>Name - {submittedData.name}</p>{" "}
          <p>Email - {submittedData.email}</p>{" "}
          <p>Password - {submittedData.password}</p>{" "}
          <p>Confirm Password - {submittedData.confirmpassword}</p>{" "}
          <p>Role - {submittedData.role}</p>{" "}
        </div>
      )}
    </div>
  );
}
