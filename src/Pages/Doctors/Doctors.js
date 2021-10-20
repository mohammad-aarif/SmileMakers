import React from 'react';
import { Link } from 'react-router-dom';
import useDoctors from '../../Hooks/useDoctors';
import Doctor from './Doctor';
import './doctors.css'
const Doctors = () => {
    const [doctor] = useDoctors();
    return (
        <div>
            <h1 className="bg-dark text-center text-light py-5">Doctor's And Stuff</h1>
            <div className="row">
                <div className="col-md-4 col-lg-4 col-12 doctors-info px-5 py-5">
                    <h1>Our Professors, Doctors, and Specialists</h1>
                    <p>The specialists at Denteeth make efforts to provide gentle and caring treatments to ensure your experience is as comfortable and stress-free as possible. Get rid of your pain, stress, and enduring with our 24/7 dental services.</p>
                    <Link to="/appointment" className="btn general-btn">Get Appointment</Link>
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                    <div className="row">
                        {
                            doctor.map(doctor => <Doctor key = {doctor.key} doctor= {doctor}></Doctor>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;