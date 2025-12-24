import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(username, password);

      localStorage.setItem("auth", JSON.stringify({ username, password }));

      navigate("/students");
    } catch (err) {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Library Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <div className="auth-footer">
          Don’t have an account? <Link to="/">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
