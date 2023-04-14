import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {

    const coursesData = useLoaderData();
    console.log(coursesData);

    return (
        <div>
            <h3>This is Courses: {coursesData.length}</h3>
            {
                coursesData.map(cData =>
                    <li key={cData.id}
                    >name: {cData.name}
                    </li>)
            }
        </div>
    );
};

export default Courses;