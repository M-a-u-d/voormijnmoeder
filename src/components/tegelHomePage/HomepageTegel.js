import React from 'react';
import "./HomepageTegel.css"


function Tile({ img, imgDescription, title, children }) {

    return (

        <section className="achterkant-tegels">

            {img && <img src={img} alt={imgDescription}/>}
            <h2>{title}</h2>
            {children}

        </section>
    );
}

export default Tile;