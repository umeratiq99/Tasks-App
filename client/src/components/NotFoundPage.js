import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>That page does not exist</h2>
            <Link to="/login">Back to Login Page</Link>
        </div>
    );
}
 
export default NotFound;