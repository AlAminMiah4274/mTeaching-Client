import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremiumServicePage = () => {

    const data = useLoaderData();
    const { name } = data;

    return (
        <div>
            <h1>Premium Course: {name}</h1>
        </div>
    );
};

export default PremiumServicePage;