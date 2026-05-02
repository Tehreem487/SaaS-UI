import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h3>SaaS Dashboard</h3>

      <div className="nav-auth">
        <Link to="/login" className="btn login">
          Login
        </Link>

        <Link to="/signup" className="btn signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;