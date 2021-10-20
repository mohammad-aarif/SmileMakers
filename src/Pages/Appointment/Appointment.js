import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Appointment = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const {user} = useAuth();
    return (
        <div>
            <h1 className="bg-dark text-center text-light py-5">Appointment</h1>
            <div className="d-flex flex-column align-item-center text-center justify-content-center py-5 mx-auto w-50">
                <form>
                    <div className="mb-3">
                        <input defaultValue={user.displayName} placeholder="Enter Your Name" type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <input defaultValue={user.email} placeholder= "Enter Your Email"  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input placeholder= "Enter Appointment Date" type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <Link to="/success" type="submit" className="btn general-btn px-5">Book Now</Link>
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}
                    </form>
                </div>
        </div>
    );
};

export default Appointment;