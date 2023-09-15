import "./register.css";
import api from "../../api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const initialValues = { username: "", email: "", password: "" };
  const [value, setValue] = useState(initialValues);
  const [error, setError] = useState(false);

  const handleChange = (ev) => {
    setValue((prevState) => {
      return { ...prevState, [ev.target.name]: ev.target.value };
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setError(false);
    try {
      const response = await api.post("/auth/register", value);
      response.data && navigate("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit} autoComplete="off">
        <label>Username</label>
        <input
          required
          type="text"
          name="username"
          onChange={handleChange}
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          required
          type="email"
          name="email"
          onChange={handleChange}
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          onChange={handleChange}
          className="registerInput"
          placeholder="Enter your password..."
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
};

export default Register;
