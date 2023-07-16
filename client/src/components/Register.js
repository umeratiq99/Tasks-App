// Register Components
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Imporing middlewares for validations
import {
  validateEmail,
  validatePassword,
} from "../services/validations/emailPwdValidation";

const Register = () => {
  // States to handle the input from user
  const [name, setName] = useState("");
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
      username: name,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5000/user/register", body)
      .then((res) => {
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
      });
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
        <h4>Register</h4>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ margin: "5px" }}>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
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
            required
            onChange={(e) => setPassword(e.target.value)}
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
          className="btn btn-primary"
          style={{ margin: "10px" }}
        >
          Register
        </button>
        <button
          type="submit"
          className="btn btn-danger"
          style={{ margin: "10px" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Back
        </button>
      </form>
    </>
  );
};

export default Register;
