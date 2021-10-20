import React from 'react';
import { Link } from 'react-router-dom';
import useDoctors from '../../../Hooks/useDoctors';
import './homedoctor.css'
import HomeSingleDoctor from './HomeSingleDoctor';
const HomeDoctor = () => {
    const[doctor] = useDoctors();
    return (
        <div className="home-doctors py-5">
            <div className="text-center">
            <h5>MEET OUR TEAM</h5>
            <h1>Professors, Doctors and Other Specialists at Our Clinic</h1>
            <p>Our specialists are highly compassionate and professional in dealing with dental health. <br /> They are experienced in dentistry.</p>
            </div>
            <div className="row my-5 px-5">
                    {
                        doctor.map(doctor => {
                            if(doctor.key <= 6){
                                return(
                                    <HomeSingleDoctor key={doctor.key} doctor={doctor}></HomeSingleDoctor>
                                )
                            }
                        })
                    }
            </div>

            <p className="text-center my-5">Get Know our Staff and <Link to= "/doctor">Doctors</Link> </p>
        </div>
    );
};

export default HomeDoctor;