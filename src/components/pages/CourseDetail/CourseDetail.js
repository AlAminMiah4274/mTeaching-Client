import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {

    const CourseDetailData = useLoaderData();
    const { img, name, detail } = CourseDetailData;

    return (
        <div className='mt-4'>
            <div className="card card-compact w-2/5 mx-auto bg-base-900 shadow-2xl">
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <h2 className="card-title">{name}</h2>
                        <FaDownload className='text-xl'></FaDownload>
                    </div>

                    <img src={img} alt="" />

                    <p>{detail}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link
                            to={`/premium/${CourseDetailData.id}`}
                        >Get Premium Access</Link></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CourseDetail;