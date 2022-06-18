import React from 'react';
import './GebeurtenisInfoKaart.css';
import { Link } from "react-router-dom";
import backIcon from "../../assets/back-svgrepo-com.svg";
import {useParams} from "react-router";


//voorbeeld pokemon en reddit



function GebeurtenisInfoKaart({name, banner, title, description, subs}) {

    const {subredditId} = useParams();
    console.log(subredditId);

    return (<div className="subreddit-info">
        <h1 className="subreddit-name">{name}</h1>
        <img className="subreddit-banner-image" src={banner} alt={`${title} subreddit banner`}/>
        <h2 className="subreddit-title">{title}</h2>
        <p className="subreddit-description">{description}</p>
        <p className="subreddit-subs">Number of subscribers: {new Intl.NumberFormat('nl-NL').format(subs)}</p>
        <Link className="subredditinfo-back" to="/">
            <img className="subredditinfo-back-icon" src={backIcon} width="20px" alt={title}/>
            Back to overview
        </Link>
    </div>);
}

export default GebeurtenisInfoKaart;