import { useFormik } from "formik";
import * as Yup from "yup";
import "./form.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [passwordVisible, setPasswordvisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .matches(
          /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Please enter a valid email address"
        ),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Please enter the password"
        ),
    }),
    onSubmit: (values) => {
      window.alert("Form submitted");
      console.log(values);
    },
  });

  return (
    <section className="section-form">
      <div className="wrapper-form">
        <div className="inforform">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <h1 className="title-form"> Login </h1>
            </div>
            <div className="inputbox">
              <label htmlFor="email">Email address</label>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                placeholder="Youremail@gmail.com"
                id="email"
                name="email"
              />
              {formik.errors.email && (
                <p className="errorMsg"> {formik.errors.email} </p>
              )}
            </div>
            <div className="inputbox">
              <label htmlfor="password">Password</label>
              <div className="password-input">
                <input
                  className="password-input-field"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your Password"
                  id="password"
                  name="password"
                />
                <button
                  className="toggle-password"
                  onClick={() => setPasswordvisible(!passwordVisible)}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
                {formik.errors.password && (
                  <p className="errorMsg"> {formik.errors.password} </p>
                )}
              </div>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <Link to="/forget"> Forgot Password?</Link>
            </div>

            <div className="btn-submit">
              <button type="submit" className="btn">
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
