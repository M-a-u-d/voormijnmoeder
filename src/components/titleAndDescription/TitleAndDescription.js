

import React from 'react';
import './TitleAndDescription.css';

function TitleAndDescription({ title, opmerking }) {
    return (
        <>
            <h3>{title}</h3>
            <p>{opmerking}</p>
        </>
    );
}

export default TitleAndDescription;