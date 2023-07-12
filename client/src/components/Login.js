import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsValid(false);
      console.log(isValid)
      return;
    }

    // Email is valid, proceed with form submission or any other action
    // ...

    // Reset form
    setEmail('');
    setIsValid(true);
  };

  const validateEmail = (email) => {
    // Use a regular expression to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <form action="/action_page.php" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </div>
      {/* TODO: add red color */}
      {!isValid && <p className="error">Please enter a valid email address.</p>}
      <div className="form-group">
        <label htmlFor="pwd">Password:</label>
        <input type="password" className="form-control" id="pwd" required/>
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
