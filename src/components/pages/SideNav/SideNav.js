import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {

    const [options, setOptios] = useState([]);

    useEffect(() => {
        fetch('https://m-teaching-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setOptios(data))
    }, []);

    return (
        <div>
            {
                options.map(option =>
                    <li key={option.id}>
                        <Link to={`/courses/${option.id}`}>{option.name}</Link>
                    </li>)
            }
        </div>
    );
};

export default SideNav;