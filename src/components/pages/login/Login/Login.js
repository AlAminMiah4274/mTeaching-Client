import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../../img/google.png';
import github from '../../../../img/GitHub-Mark.png';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const [error, setError] = useState(null);
    const { userSignIn, providerLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // google provider
    const googleProvider = new GoogleAuthProvider();

    // github provider
    const githubProvider = new GithubAuthProvider();

    const handleLoginForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
                setError('');
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
    };

    const handleGoogle = () => {
        providerLogIn(googleProvider);
    };

    const handleGitHub = () => {
        providerLogIn(githubProvider);
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left mb-2">
                        <h1 className="text-5xl font-bold">Please login !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-screen-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className='text-red-600'>
                                <span>{error}</span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <label className="label">
                                    <p className='label-text-alt'>New to mTeaching? <Link to='/register' className="link link-hover">register</Link></p>
                                </label>
                            </div>
                        </form>
                    </div>
                    <p>or</p>
                    <div onClick={handleGoogle} className='border rounded-3xl px-10 py-3'>
                        <button className='flex'>
                            <img className='mr-3' src={google} alt="" width={25} />
                            <p>Continue with Google</p>
                        </button>
                    </div>
                    <div onClick={handleGitHub} className='border rounded-3xl px-10 py-3'>
                        <button className='flex'>
                            <img className='rounded-full mr-3' src={github} alt="" width={25} />
                            <p>Continue with GitHub</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;