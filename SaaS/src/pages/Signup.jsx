import { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const API = import.meta.env.VITE_API_URL;

  const handleSignup = async () => {
    // ✅ validation
    if (!name || !email || !password) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(`${API}/api/auth/register`, {
        name,
        email,
        password,
      });

      setMessage("✅ Account Created Successfully");

      console.log(res.data);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "❌ Signup failed"
      );
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Sign Up</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

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

      <button onClick={handleSignup}>
        Create Account
      </button>

      <p style={{ marginTop: "15px", color: "green" }}>
        {message}
      </p>
    </div>
  );
}

export default Signup;