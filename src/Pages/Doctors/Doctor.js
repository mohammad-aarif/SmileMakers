import React from 'react';

const Doctor = (props) => {
    const {name, title, description, img} = props.doctor;
    return (
        <div className="col-lg-4 g-5 col-6">
            <div className="doctor-image">
                <img src={img} alt="" />
            </div>
            <div className="doctor-info">
                <h3>{name}</h3>
                <strong className="my-2 text-primary">{title}</strong>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Doctor;