import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NB from 'react-bootstrap/Navbar';
import axios from "axios";

const Navbar = () => {

  const handleLogout=()=>{
    localStorage.removeItem('token');
    axios.post("http://localhost:5000/user/logout")
    .then((res) => {
      navigate("/login");
    })
    .catch((e) => {
      alert(e.response.data.message);
    });
  }
  
  const navigate=useNavigate();
  return (
    <>
       <NB bg="light" data-bs-theme="light">
        <Container style={{display:"flex", justifyContent:"space-between"}}>
          <NB.Brand><Link to="/tasks" style={{textDecoration:"none"}}><h3>TasksPro</h3></Link></NB.Brand>
          <Nav>
            <Nav.Link ><button
            className="btn btn-danger navbar-btn"
            onClick={handleLogout}
          >
            Logout
          </button></Nav.Link>
          </Nav>
        </Container>
      </NB>
    </>
  );
};

export default Navbar;
