import React from 'react';
import "./HomepageTegel.css"


function Tile({ img, imgDescription, title, children }) {

    return (

        <section className="home-page-kaart">

            {img && <img src={img} alt={imgDescription}/>}
            <h2>{title}</h2>
            {children}

        </section>
    );
}

export default Tile;