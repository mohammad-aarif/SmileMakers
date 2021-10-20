import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container py-3">
                <div className="row">
                    <div className="col-md-6 col-lg-6 footer-info col-12">
                        <img className="my-3" src={logo} alt="" />
                        <h5>Fake Street, New Yourk, Dhaka</h5>
                        <h5>contact@email.com</h5>
                        <h5>www.website.com</h5>
                    </div>
                    <div className="col-md-6 col-lg64 support col-12">
                        <h3>Support</h3>
                        <Link to="/home#aboutus">About Us</Link><br />
                        <Link to="services">Services</Link><br />
                        <Link to="doctor">Doctors</Link><br />
                        <Link to="appointment">Book Appointment</Link><br />

                    </div>
            </div>
            </div>
            <hr />
            <p className="text-center footer-info py-3">&copy; 2021 All Right reserved by SmileMaker</p>
        </div>
    );
};

export default Footer;