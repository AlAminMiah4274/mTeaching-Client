import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {

    const CourseDetailData = useLoaderData();
    console.log(CourseDetailData);
    const { img, name, detail } = CourseDetailData;

    return (
        <div>
            <div className="card card-compact w-2/5 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                    <img src={img} alt="" />

                    <p>{detail}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to='/premium'>Get Premium Access</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;