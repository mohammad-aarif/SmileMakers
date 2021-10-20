import React from 'react';
import './aboutus.css'
import doctorsImg from '../../images/doctors.png'
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div id="aboutus" className="about-us my-5 container">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <img className="img-fluid" src={doctorsImg} alt="" />
                </div>
                <div className="col-lg-6 col-12 ps-3 py-3 my-3 about-us-text">
                    <h1>Modern-day Caring Technologies for Your Dental Health</h1>
                    <p>SmileMaker always places patients at the center of our attention, and concentrate on improving their experience with the aid of technologies.</p>
                    <ul className="my-3">
                        <li>We check for your current dental situation and decide treatment</li>
                        <li>Our specialists will take care of your smile with dedication</li>
                        <li>We run periodic check-ups to ensure your teeth are good</li>
                        <li>Even on weekends and holidays, our staff still work at your services</li>
                    </ul>
                    <Link to="/appointment" className="btn px-5 py-2 general-btn">Get Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;