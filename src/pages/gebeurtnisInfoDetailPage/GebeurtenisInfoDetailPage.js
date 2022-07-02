import React, { useContext, useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import TegelGebeurtenisDetail from '../../components/tegelGebeurtenisDetail/TegelGebeurtenisDetail';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import PageHeader from "../../components/header/PageHeader";
import backIcon from "../../assets/back-svgrepo-com.svg";
import gebeurtenis from "../gebeurtenis/Gebeurtenis";

function GebeurtenisInfoDetailPage() {

    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const [username, setUsername] = useState('')
    const [details, setDetails] = useState({});

    const { naam } = useParams();
    // const currentGebeurtenis = gebeurtenissen.find((gebeurtenis) => {
    //     return gebeurtenis.naam === gebeurtenisNaam;
    // });

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);

            // const naam = localStorage.getItem('naam');

                try {
                    const response = await axios.get(`http://localhost:8081/gebeurtenissen/${naam}`);
                    setDetails(response.data);
                    console.log(response.data);

                } catch (e) {
                    console.error(e);
                    toggleError(true);
                }
                toggleLoading(false);
            }

            fetchData();

        }, []);

    async function handleSubmit(e) {

        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:8081/geus/${username}/${gebeurtenisnaam}', {
                username: username,

            });

        } catch(e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <>
            <div>
                <PageHeader>
                    <h2>b e L e v e n - d e t a i l</h2>
                    <h1>{ naam }</h1>
                </PageHeader>
            </div>

            <>
                <div className="outer-content-container ">
                    <div className="inner-content-container">

                        <div className="mid-container">

                        {Object.keys(details).length > 0 && (
                            <div>
                                {details &&
                                <TegelGebeurtenisDetail

                                        omschrijving={details.opmerking}
                                        organisator = {details.organisator}
                                        woonplaats={details.woonplaats}
                                        straat={details.naamwaar}
                                        wanneer={details.wanneer}
                                />
                                    }

                            </div>
                        )}

                            <div className="gebeurtenis-details">
                                    <p>ik schrijf me in</p>

                                    <form onSubmit={handleSubmit}>

                                    <label htmlFor="naam-field">
                                        Mijn naam :
                                        <input
                                            type="naam"
                                            id="naam-field"
                                            name="naam"
                                            value={ username }
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className="form-button"
                                        disabled={loading}
                                    >
                                        Klik op de button en je hebt je ingeschreven.
                                    </button>

                                </form>

                            </div>

                        {loading && <Loader/>}
                        {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
                    </div>
                    </div>
                </div>

                <h4>best leuk</h4>
                <Link className="subredditinfo-back" to="/">
                    <img className="subredditinfo-back-icon" src={backIcon} width="20px" alt="terug"/>
                    Back to overview
                </Link>
            </>
        </>
    );
}

export default GebeurtenisInfoDetailPage;