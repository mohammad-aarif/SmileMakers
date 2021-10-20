import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name, desc, img, key} = props.service;
    return (
            <div className="col-lg-4 col-12 col-md-6">
                    <div className="service-img">
                    <img className="" src={img} alt="" />
                    </div>
                    <div className="service-info my-2">
                    <h3>{name}</h3>
                    <p>{desc.slice(0, 100)}</p>
                    <Link to= {`/serviceinfo/${key}`} className="btn general-btn px-5">View Details</Link>
                    </div>
            </div>
            
    );
};

export default Service;