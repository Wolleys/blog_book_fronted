import "./login.css";
import api from "../../api";
import { useState } from "react";
import { useUser } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch, isFetching } = useUser();
  const initialValues = { username: "", password: "" };
  const [value, setValue] = useState(initialValues);

  const handleChange = (ev) => {
    setValue((prevState) => {
      return { ...prevState, [ev.target.name]: ev.target.value };
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await api.post("/auth/login", value);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      response.data && navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          required
          type="text"
          name="username"
          className="loginInput"
          onChange={handleChange}
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          className="loginInput"
          onChange={handleChange}
          placeholder="Enter your password..."
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
};

export default Login;
