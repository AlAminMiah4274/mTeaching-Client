import React from 'react';

const CourseInfo = ({ course }) => {

    const { img, name, detail } = course;

    return (
        <div>
            <div className="card w-96 bg-base-700 shadow-xl image-full">
                <figure>
                    <img className='w-96' src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>
                        {
                            detail.length > 150 ?
                                <>{detail.slice(0, 150) + '...'}</> :
                                <>{detail}</>
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;