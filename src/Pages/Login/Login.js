import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import firebaseInitializeAuth from '../Shared/Firebase/firebase.init';

firebaseInitializeAuth();

const Login = () => {
    const { emailSignIn, googleSignIn} = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => emailSignIn(data);
    return (
        <div>
            <h1 className="bg-dark text-center text-light py-5">Log in</h1>
            <div className="row">
                <div className="d-flex flex-column align-item-center text-center justify-content-center py-5 mx-auto w-50">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input placeholder= "Enter Your Email" {...register("email", { required: true })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input placeholder="Enter Your Password" {...register("password")} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <p>New User? <Link to="register">Register</Link> </p>
                    <button type="submit" className="btn general-btn px-5">Submit</button>
                    {errors.exampleRequired && <span>This field is required</span>}
                    </form>
                    <p>Sign In With </p>
                    <div>
                    <button onClick={googleSignIn} className="btn mx-2 btn-outline-primary">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;