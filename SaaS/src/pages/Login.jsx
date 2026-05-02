import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const API = import.meta.env.VITE_API_URL;

  const handleLogin = async () => {
    // ✅ 1. FRONTEND VALIDATION
    if (!email || !password) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(`${API}/api/auth/login`, {
        email,
        password,
      });

      setMessage("✅ Login Successful");

      localStorage.setItem("token", res.data.token);
    } catch (error) {
      // ✅ 2. BACKEND ERROR HANDLING
      setMessage(
        error.response?.data?.message || "❌ Invalid credentials"
      );
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>

      {/* MESSAGE DISPLAY */}
      <p style={{ marginTop: "15px", color: "red" }}>
        {message}
      </p>
    </div>
  );
}

export default Login;