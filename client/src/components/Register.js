const Register = () => {
    return ( 
    <form action="/action_page.php">
    <h1>Register</h1>
    <div className="form-group">
      <label>Name:</label>
      <input type="text" className="form-control" id="email" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email address:</label>
      <input type="email" className="form-control" id="email" />
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" />
    </div>

    <button type="submit" className="btn btn-default">
      Register
    </button>
  </form> );
}
 
export default Register;