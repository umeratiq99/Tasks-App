import {Link , useNavigate} from "react-router-dom"
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <>
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link to="/tasks" className="navbar-brand">Your's Task-Manager</Link>
    </div>
    <ul className="nav navbar-nav">
      {/* <li className="active"><a>Home</a></li> */}
      {/* <li><Link to='/'>Add</Link></li> */}
      {/* <li><Link to="/">Link</Link></li> */}
    </ul>
    <button className="btn btn-danger navbar-btn" onClick={()=>{
      localStorage.removeItem('token');
      navigate("/login");
    }}>Logout</button>
  </div>
</nav>

<div className="container">
  <h2>Task Manager</h2>
</div>
    </>
  );
};

export default Navbar;
