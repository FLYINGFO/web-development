import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // For navigation links
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Sending login request to backend
        const response = await axios.post("http://localhost:8888/api/auth/login", {
          email,
          password,
        });
        // Storing token in localStorage (or cookie)
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } catch (error) {
        setError("Invalid credentials");
      }
    };
  
    return (
      <div className="form-container">
        <h2>Log In</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  };
  
  export default LoginPage;