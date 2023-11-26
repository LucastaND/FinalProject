import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "./form.css";

const LoginForm = () => {
  const [passwordVisible, setPasswordvisible] = useState(false);
  const { dispatch } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Import useNavigate

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behaviorZ

    try {
      const response = await fetch(
        "http://localhost:8080/api/nguoi-dung/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const userData = await response.json();
        dispatch({ type: "LOGIN", payload: userData });
        navigate("/home"); // Use navigate for redirection
      } else {
        // Xử lý lỗi xác thực
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <section className="section-form">
      <div className="wrapper-form">
        <div className="inforform">
          <form>
            <div>
              <h1 className="title-form"> Login </h1>
            </div>
            <div className="inputbox">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                placeholder="Email Address"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputbox">
              <label htmlfor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="toggle-password"
                onClick={() => setPasswordvisible(!passwordVisible)}
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forget"> Forgot Password?</Link>
            </div>

            <div className="btn-submit">
              <button type="submit" className="btn" onClick={handleLogin}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
