// Login Component
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {validateEmail,validatePassword} from "../services/validations/emailPwdValidation"

const Login = () => {
  // States to handle the input from user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isValidPass, setValidPass] = useState(true);

  const navigate = useNavigate();

  // API call on login submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }
    if (!validatePassword(password)) {
      setValidPass(false);
      return;
    }
    const body = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/user/login", body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/tasks");
      })
      .catch((e) => {
        alert(e.response.data.message);
      });

    setIsValid(true);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <h2>Task's Manager</h2>
        <h4>Login</h4>
        <div className="form-group" style={{ margin: "5px" }}>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          {!isValid && (
            <p style={{ color: "red" }}>Please enter a valid email address.</p>
          )}
        </div>
        <div className="form-group" style={{ margin: "5px" }}>
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          {!isValidPass && (
            <p style={{ color: "red" }}>
              Password should have an Uppercase Character, a Lowercase
              Character, a Number, a Speacial Charcter and Minimum Lenght of 8.
            </p>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-success"
          style={{ margin: "10px" }}
        >
          Login
        </button>
        <button type="button" className="btn btn-primary">
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "white" }}
          >
            Register
          </Link>
        </button>
      </form>
    </>
  );
};

export default Login;
