import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumServicePage = () => {

    const data = useLoaderData();
    const { name } = data;

    return (
        <div>
            <h1 className='text-2xl'> {name}</h1>
        </div>
    );
};

export default PremiumServicePage;