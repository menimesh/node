import React, { useState } from "react";
import imgLogin from "../assets/login.jpg";
import "./login.css";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../api/config.js";
const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // Function to update state as user types
  const addData = (e) => {
    const { name, value } = e.target;
    setLogin((login) => ({
      ...login,
      [name]: value,
    }));
  };

  const loginData = async (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", login);
    const response = await api.post("/book/login", login);
    console.log(response);
    if (response) {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <img src={imgLogin} alt="Login illustration" />
      <form onSubmit={loginData}>
        <input
          type="email"
          placeholder="abcd@gmail.com"
          name="email"
          value={login.email}
          onChange={addData}
          required
        />
        <input
          type="password"
          placeholder="*******"
          name="password"
          value={login.password}
          onChange={addData}
          required
        />
        <button type="submit">Login</button>
        <p>Don't have an account?</p>
        <button type="button">Register Now</button>
      </form>
    </div>
  );
};

export default Login;
