import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="header-text">
                <h1>Highly Experinced <br /> Dental Doctor</h1>
                <h4>Our specialists are highly compassionate and professional in dealing with <br /> dental health. They are experienced is dentistry</h4>
                <Link to="/services" className='btn general-btn py-2 px-5 my-3'>View Our Services</Link>
            </div>
        </div>
    );
};

export default Header;