import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://th.bing.com/th/id/OIP.NUVdRT7UMtm_NGbZ7S-1MwHaFj?w=205&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Logo"
            width="50"
            height="50"
            style={{ borderRadius: '50%' }}
          />
        </Link>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn-logout" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
