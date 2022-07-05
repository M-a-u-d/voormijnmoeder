import {Link} from "react-router-dom";
import backIcon from "../../assets/back-svgrepo-com.svg";
import React from 'react';

function TerugNaarHomePage ({ children }){

return (
<div className="outer-content-container">
    <div className="inner-content-container">
        <Link to="/">
            <img src={backIcon} width="20px" alt="terug"/>
            <h3>No worrries, klikt op de terug pijl, en je komt weer op het startpunt uit.</h3>
            {children}
        </Link>
    </div>
</div>
);
}
export default TerugNaarHomePage;