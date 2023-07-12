import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const body = {
      "username": name,
      "email": email,
      "password" : password
    }
    axios.post("http://localhost:5000/user/register", body).then((res) => {
      navigate('/login');
    }).catch(e => {
      console.log(e);
    })
  }

  return ( 
  <form onSubmit={handleSubmit}>
  <h1>Register</h1>
  <div className="form-group">
    <label>Name:</label>
    <input type="text" className="form-control" id="name" onChange={e => setName(e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="email" className="form-control" id="email" onChange={e => setEmail(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" onChange={e => setPassword(e.target.value)}/>
  </div>

  <button type="submit" className="btn btn-default">
    Register
  </button>
  </form> 
  );
}
 
export default Register;