import { Link } from "react-router-dom";
const Front = () => {
  return (
    <div>
      <h2>Login or Register to Access</h2>
      <br/>
      <button className="btn btn-default">
        <Link to="/register">Register</Link>
      </button>
      <h2>Already Got an Account?</h2>
      <button className="btn btn-default">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Front;
