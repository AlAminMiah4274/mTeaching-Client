import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import google from '../../../../img/google.png';
import github from '../../../../img/GitHub-Mark.png';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { userSignIn, providerLogIn } = useContext(AuthContext);

    // google provider
    const googleProvider = new GoogleAuthProvider();

    // github provider
    const githubProvider = new GithubAuthProvider();

    const handleLoginForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(e => {
                console.error(e);
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