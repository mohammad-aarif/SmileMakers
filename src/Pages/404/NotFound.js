import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.png'
const NotFound = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column container">
            <img className="w-50" src={notfound} alt="" />
            <Link className="btn my-5 general-btn px-5" to='/'>Go Back</Link>
        </div>
    );
};

export default NotFound;