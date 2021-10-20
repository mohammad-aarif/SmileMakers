import React from 'react';
import useService from '../../Hooks/useServices';
import Service from './service/Service';
import './services.css'
const Services = () => {
    const [service] = useService();
    return (
        <div className="services text-center py-5">
            <div className="services-header">
                <h5>OUR SERVICES</h5>
                <h1>Services at Our Clinic</h1>
                <p>Our clinic offers all kinds of services and constantly study new technology to add new custom <br /> services to the list</p>
            </div>
            <div className="row my-5 g-5 px-5">
                {
                    service.map(service => <Service key={service.key} service = {service}></Service>)
                }
            </div>
            <p className="text-center pt-2">Don’t skip your regular check-up for teeth. Book an appointment!</p>
        </div>
    );
};

export default Services;