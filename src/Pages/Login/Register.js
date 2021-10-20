import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {error, googleSignIn, emailSignUp} = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => emailSignUp(data)
    return (
        <div>
            <h1 className="bg-dark text-center text-light py-5">Log in</h1>
            <div className="row">
                <div className="d-flex flex-column align-item-center text-center justify-content-center py-5 mx-auto w-50">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <span className="text-danger">{error}</span>
                    <div className="mb-3">
                        <input placeholder= "Enter Your Name" {...register("displayName", { required: true })} type="text" required className="form-control" id="displayName"/>
                    </div>
                    <div className="mb-3">
                        <input placeholder= "Enter Your Email" {...register("email", { required: true })} type="email" required className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input placeholder="Enter Your Password" {...register("password")} type="password" className="form-control" required id="Password" />
                    </div>
                    <p>Already Have an Account? <Link to="login">Login</Link> </p>
                    <button type="submit" className="btn general-btn px-5">Submit</button>
                    </form>
                    <p>Register With</p>
                    <div>
                    <button onClick={googleSignIn} className="btn mx-2 btn-outline-primary">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;