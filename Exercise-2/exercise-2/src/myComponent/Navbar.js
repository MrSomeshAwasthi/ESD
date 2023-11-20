import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://th.bing.com/th/id/OIP.NUVdRT7UMtm_NGbZ7S-1MwHaFj?w=205&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Bootstrap"
            width="50"
            height="50"
            style={{ borderRadius: '50%' }}
          />
        </Link>

        <form className="d-flex ms-auto my-2 my-lg-0" role="search">
          <div className="input-group">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              <i className="fas fa-search"></i>
              Search
            </button>
          </div>
        </form>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Allproducts">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Profile">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={toggleDropdown}>
              <button
                className="nav-link dropdown-toggle"
                role="button"
                aria-expanded={isDropdownOpen}
              >
                <img src="user.jpg" alt="Profile" className="profile-image rounded-circle" width="40" height="40" />
              </button>
              <ul className={`dropdown-menu dropdown-menu-end ${isDropdownOpen ? 'show' : ''}`}>
               <li>
                  <Link className="dropdown-item" to="/Profile">
                    Profile Details
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" /> 
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Logout
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
