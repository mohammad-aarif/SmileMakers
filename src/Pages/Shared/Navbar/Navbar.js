import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import logo from '../../../images/logo.png'
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {
    const{user, logOut} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="#"><img className="logo" src={logo} alt="SmileMaker" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/doctor">Doctors</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/home#aboutus">About Us</Link>
                        </li>
                    </ul>
                    {
                        user.email ? <div className="d-flex user-logout">
                        <p className="my-auto mx-3"><strong> {user.displayName ? user.displayName : user.email}</strong></p>
                        <button onClick={logOut} className="logout-btn">Log Out</button>
                    </div>:<Link className="btn general-btn px-5" to="/login">Log in</Link>

                    }

                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;