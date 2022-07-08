import {Link} from "react-router-dom";
import backIcon from "../../assets/back-svgrepo-com.svg";
import React from 'react';
import "./TerugNaarHomePage.css"

function TerugNaarHomePage ({ children }){

return (

<div className="outer-content-container">
    <div className="inner-content-container">

        <div className="terug">

            <Link to="/">
                <img src={backIcon} width="30px" alt="terug"/>
                <p>No worrries, klikt op de terug pijl, en je komt weer op het startpunt uit.</p>
                {children}
            </Link>
            <p>best leuk</p>
        </div>
    </div>
</div>
);
}
export default TerugNaarHomePage;