import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import CourseInfo from '../CourseInfo/CourseInfo';

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-12'>
                <div className='col-span-8 border-solid border-2 border-yellow-500'>
                    <div className='grid grid-cols-2 gap-7 py-5 pl-4'>
                        {
                            courses.map(course => <CourseInfo
                                key={course.id}
                                course={course}
                            ></CourseInfo>)
                        }
                    </div>
                </div>
                <div className='col-span-4 border-solid border-2 border-sky-500'>
                    <SideNav></SideNav>
                </div>
            </div>
        </div>
    );
};

export default Courses;