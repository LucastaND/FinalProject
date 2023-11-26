import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import "./form.css";

const SignupForm = () => {
  const [passwordVisible, setPasswordvisible] = useState(false);
  const { dispatch } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [classroom, setClassroom] = useState("");
  const [gender, setGender] = useState("");
  const [stid, setStId] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("api/nguoi_dung", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
          name,
          classroom,
          gender,
          stid,
        }),
      });

      if (response.ok) {
        const userData = await response.json();
        dispatch({ type: "LOGIN", payload: userData });
      } else {
        // Xử lý lỗi đăng ký
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <section className="section-form">
      <div className="wrapper-form">
        <div className="inforform">
          <form>
            <h2 className="title"> Create Account </h2>
            <div className="inputbox">
              <label htmlFor="name"> Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="inputbox">
              <label htmlFor="email"> Email Address</label>
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
              <label htmlfor="text">Student ID</label>
              <input
                type="text"
                placeholder=" Student ID"
                id="stid"
                name="stid"
                value={stid}
                onChange={(e) => setStId(e.target.value)}
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
            <div className="inputbox">
              <label htmlFor="password">Classroom</label>
              <input
                type="text"
                placeholder="Enter your Classroom"
                value={classroom}
                onChange={(e) => setClassroom(e.target.value)}
              />
            </div>
            <div className="inputbox">
              <label htmlFor="text">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student"> Student </option>
              <option value="lecturer"> Lecturer </option>
              <option value="admin">Admin</option>
            </select>

            <button type="submit" className="btn" onClick={handleSignup}>
              Create Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
