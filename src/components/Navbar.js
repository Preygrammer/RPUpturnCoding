import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const loggedIn = useSelector((state) => state.authorization.loggedIn);

  return (
    <div className="navbar-container">
      <div className="header">
        <div className="header-brand">
          <h4>Upturn Coding</h4>
          <small>by Reymart Pineda</small>
        </div>
        <div className="header-actions">
          {!loggedIn ? (
            <>
              <ul>
                <li>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="nav-link">
                    Signup
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Algorithms
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="nav-link logout-action btn-style-1"
                >
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
