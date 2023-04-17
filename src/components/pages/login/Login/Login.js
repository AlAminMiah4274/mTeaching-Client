import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../../../img/google.png';
import github from '../../../../img/GitHub-Mark.png';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left mb-2">
                        <h1 className="text-5xl font-bold">Please login !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-screen-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <label className="label">
                                    <p className='label-text-alt'>New to mTeaching? <Link to='/register' className="link link-hover">register</Link></p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-3xl px-10 py-3 flex'>
                        <img className='mr-3' src={google} alt="" width={25} />
                        <p>Continue with Google</p>
                    </div>
                    <div className='border rounded-3xl px-10 py-3 flex'>
                        <img className='rounded-full mr-3' src={github} alt="" width={25} />
                        <p>Continue with GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;