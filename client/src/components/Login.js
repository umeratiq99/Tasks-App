import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValid(false);
      console.log(isValid)
      return;
    }
    const body = {
      "email": email,
      "password" : password
    }
    axios.post("http://localhost:5000/user/login", body).then(res => {
      localStorage.setItem('token', res.data.token);
      navigate('/tasks')
    }).catch(e => {
      console.log(e)
    })

    setIsValid(true);
  };

  const validateEmail = (email) => {
    // Use a regular expression to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </div>
      {!isValid && <p className="error">Please enter a valid email address.</p>}
      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" onChange={e => setPassword(e.target.value)} required/>
      </div>
      <button type="submit" className="btn btn-default">
        Login
      </button>
      <button type="button" className="btn btn-default">
        <Link to="/register">Register</Link>
      </button>
    </form>
  );
};

export default Login;
