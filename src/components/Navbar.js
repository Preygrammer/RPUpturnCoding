export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="header">
        <div className="header-brand">
          <h4>Upturn Coding</h4>
          <small>by Reymart Pineda</small>
        </div>
        <div className="header-actions">
          <ul>
            <li>
              <a href="/" className="nav-link">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Algorithms
              </a>
            </li>
            <li>
              <a href="/" className="nav-link logout-action btn-style-1">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
