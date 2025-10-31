import React, { useState } from "react";
import axios from "axios";

const Login = ({ setPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);

      // ✅ ADD THIS LINE
      localStorage.setItem("user", JSON.stringify(res.data.user)); 

      setPage("profile"); // optional, to go to profile after login
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
