import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/education-icon.png';
import { AuthContext } from '../../../contexts/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {

    const { user, userLogOut } = useContext(AuthContext);

    const handleLogOut = () => {

        userLogOut()
            .then(() => { })
            .catch(e => console.error(e))
    };

    return (
        <div>
            <div className="navbar bg-gray-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Item 1</Link></li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2">
                                    <li><Link>Submenu 1</Link></li>
                                    <li><Link>Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>

                    <Link to='/' className="btn btn-ghost normal-case text-3xl pl-2 font-bold"><img className='rounded-full me-2' src={logo} alt="" width={30} /> mTeaching</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link>FAQ</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <button onClick={handleLogOut} className='me-3'>LogOut</button> :
                            <Link to='/login' className="me-3">Login</Link>
                    }

                    {
                        user?.photoURL ?
                            <img className='rounded-full w-11 h-11' src={user?.photoURL} alt="" /> :
                            <FaUserAlt></FaUserAlt>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;