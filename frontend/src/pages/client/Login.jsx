import React, { useState } from "react";
import "./Login.css";
import { ReactComponent as PersonIcon } from "../../icons/person-icon.svg";
import ActionButton from "../../components/ActionButton";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formData;

    // You can add your login logic here, e.g., send a request to the server

    // Clear the form fields
    setFormData({ username: "", password: "" });
  };

  const { username, password } = formData;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "60vh",
          width: "30vw",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(38, 50, 40, 0.2)",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <PersonIcon className="login-icon" />
        <p
          style={{
            color: "#263228",
            fontSize: "20pt",
            fontWeight: "600",
            marginBottom: "10px",
          }}
        >
          Sign In to Technozone
        </p>
        <form onSubmit={handleSubmit} className="login-form">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label htmlFor="username"></label>
            <p className="input-field-title">Email Address</p>
            <input
              className="input-field"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label htmlFor="password"></label>
            <p className="input-field-title">Password</p>
            <input
              className="input-field"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
            />

          </div>
          {/* <button type="submit">Login</button> */}
        </form>

        <ActionButton
          onTap={() => {
            console.log("Button Clicked");
          }}
          buttonText="Sign In"
          height="3.5vh"
          width="30%"
          margin="5px"
          fontSize="18pt"
        />

        <p
          style={{
            color: "grey",
            margin: "5px 0",
          }}
        >
          Dont have an account?{" "}
          <Link to="/register" style={{ color: "var(--bg-accent)" }}>
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
