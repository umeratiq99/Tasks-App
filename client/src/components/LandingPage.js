// Landing page when the app first starts
import { Link } from "react-router-dom";
const Front = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      justifyContent: "center",
    }}>
      <h1>Task's Manager</h1>
      <h2>Login or Register to Access</h2>
      <br/>
      <button className="btn btn-success">
        <Link to="/register" style={{ textDecoration: "none", color: "white" }}>Register</Link>
      </button>
      <h2>Already Got an Account?</h2>
      <button className="btn btn-primary">
        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>Login</Link>
      </button>
    </div>
  );
};

export default Front;
