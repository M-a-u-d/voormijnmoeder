

import React from 'react';
import './TitleAndDescription.css';

function TitleAndDescription({ title, opmerking }) {
    return (
        <>
            <h3 className="subreddit-specification-details-title">{title}</h3>
            <p className="subreddit-specification-details-description">{opmerking}</p>
        </>
    );
}

export default TitleAndDescription;