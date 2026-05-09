import React, { useState } from "react";
import API from "../api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      await API.post("/auth/signup", {
        name,
        email,
        password,
      });

      alert("Signup Successful");
      window.location.href = "/";
    } catch (err) {
      alert("Signup Failed");
    }
  };

  return (
    <div>
    <h1>Expense Management Alert System</h1>
      <h2>Signup</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={registerUser}>Signup</button>

      <p>
        Already have account? <a href="/">Login</a>
      </p>
    </div>
  );
}

export default Signup;