import React from 'react';

const HomeSingleDoctor = (props) => {
    const{name, img, title} = props.doctor;
    return (
        <div className="col-md-4 col-lg-2 col-12 doctors-container">
            <div className="home-doctor-image">
            <img src={img} alt="" />
            </div>
            <div className="info d-flex align-item-center justify-content-center">
                <strong className="">{name}<br />{title}</strong>
            </div>
        </div>
    );
};

export default HomeSingleDoctor;