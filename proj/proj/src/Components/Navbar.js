import React from 'react'
import logo from '../images/logo.png';
import SearchBar from './SearchBar';
import { Outlet, Link } from "react-router-dom";
// import '../App.css';

export const Navbar = (props) => {

    console.log(props)

    // console.log("props in nav: ");
    // console.log(props);

    // console.log("data in nav: " + props.props.data)

    // props = props.props;

    // const cartCount = window.localStorage.getItem('cartCount');


    return (
        <div className='mynav'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width='100px' alt='logo' />
                    </a>

                    <div className='search-wrap'>
                        <SearchBar />
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="collapse-search nav-item">
                                <SearchBar />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Download App</a>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/product-list">Products</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Newsroom</a>
                            </li>

                            <li className="nav-item">
                                <div className='profile-cont'>
                                    <a className="nav-link" href="profile.html">
                                        <span>
                                            Profile
                                        </span>
                                        <span className='profile-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#fff" className="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <div className='cart-cont'>
                                    {
                                        props.props.page==="login"
                                        ?
                                        <Link className='nav-link' to="/">Login</Link>
                                        :
                                        <Link className='nav-link' to="/">Logout</Link>
                                    }
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* <nav classNameName="navbar bg-body-tertiary">
                <div classNameName="container">
                    <a classNameName="navbar-brand" href="#">
                        <img src={logo} width='100px' alt='logo' />
                    </a>

                    <SearchBar />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="options nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Download App</a>
                            </li>

                            <li className="options nav-item">
                                <a className="nav-link" href="#">Become a Supplier</a>
                            </li>

                            <li className="options nav-item">
                                <a className="nav-link" href="#">Newsroom</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="profile.html">Profile</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="cart.html">Cart</a>
                            </li>

                        </ul>
                    </div>

                </div>

            </nav> */}

        </div>
    )
}

export default Navbar


