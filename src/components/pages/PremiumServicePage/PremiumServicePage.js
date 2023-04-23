import React from 'react';
import { useLocation } from 'react-router-dom';

const PremiumServicePage = () => {

    const location = useLocation()
    const data = location.state;
    const { name } = data;

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default PremiumServicePage;