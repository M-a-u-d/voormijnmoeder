import React from 'react';

function Tile({ img, imgDescription, title, children }) {
    return (
        <section>
            {img && <img src={img} alt={imgDescription}/>}
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Tile;