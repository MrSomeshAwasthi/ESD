import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
              <Link className="nav-link active" aria-current="page" to="cart.html">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="profile.html">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="profile.html"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="user.jpg" alt="Profile" className="profile-image rounded-circle" width="40" height="40" />
              </Link>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="profile.html">
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
