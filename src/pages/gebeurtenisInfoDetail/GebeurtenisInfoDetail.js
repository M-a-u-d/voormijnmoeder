import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SubredditPage.css';
import BackLink from '../../components/backlink/BackLink';
import TitleAndDescription from '../../components/titleAndDescription/TitleAndDescription';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import PageHeader from "../../components/header/PageHeader";

function GebeurtenisInfoDetail() {
    const [details, setDetails] = useState({});
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);




    return (
        <>
            <PageHeader>
                <h1>r/{id}</h1>
                <h4>b e L e v e n  d e t a i l</h4>
            </PageHeader>
            <main>
                <section className="outer-content-container ">
                    <div className="inner-content-container">
                        {Object.keys(details).length > 0 && (
                            <div className="subreddit-specification-details">

                                <TitleAndDescription title="Title" description={details.title} />
                                <TitleAndDescription title="Description" description={details.organisator} />


                                <BackLink url="/" label="Take me back" />
                            </div>
                        )}
                        {loading && <Loader/>}
                        {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
                    </div>
                </section>
            </main>
        </>
    );
}

export default GebeurtenisInfoDetail;