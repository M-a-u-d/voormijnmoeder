
import React, {useState} from "react";
import PageHeader from "../../components/header/PageHeader";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import {Link} from "react-router-dom";
import backIcon from "../../assets/back-svgrepo-com.svg";
import axios from "axios";

function GebeurtenisNieuwAanmaken() {

    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    const [naam, setNaam] = useState('');
    const [straat, setStraat]= useState('')
    const [woonplaats, setWoonplaats]= useState('')
    const [naamwaar, setNaamwaar]= useState('')
    const [opmerking, setOpmerking]= useState('')
    const [organisator, setOrganisator]= useState('')
    const [datum, setDatum]= useState('')


    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:8081/gebeurtenissen', {

                datum: datum,
                naam: naam,
                straat: straat,
                woonplaats: woonplaats,
                naamwaar: naamwaar,
                opmerking: opmerking,
                organisator: organisator,
            });


        } catch(e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }
    return(
        <>
            <div>
                <PageHeader>
                    <h1>Maak een nieuwe gebeurtenis</h1>
                </PageHeader>
            </div>
            <>
                <div className="outer-content-container">
                    <div className="inner-content-container">

                        <h2>under construction.</h2>

                        <form onSubmit={handleSubmit}>
                            <label htmlFor="naam-field">
                                naam van de gebeurtenis
                                <input
                                    type="naam"
                                    id="naam-field"
                                    name="naam"
                                    value={naam}
                                    onChange={(e) => setNaam(e.target.value)}
                                />
                            </label>


                            <label htmlFor="datum-field">
                                 wanneer gaat het plaatsvinden
                                <input
                                    type="datum"
                                    id="datum-field"
                                    name="datum"
                                    value={datum}
                                    onChange={(e) => setDatum(e.target.value)}
                                />
                            </label>

                            <label htmlFor="organisator-field">
                               wie organiseert het
                                <input
                                    type="datum"
                                    id="organisator-field"
                                    name="organisator"
                                    value={organisator}
                                    onChange={(e) => setOrganisator(e.target.value)}
                                />
                            </label>

                            <label htmlFor="naamwaar-field">
                                Waar gaat het plaatsvinden
                                <input
                                    type="naamwaar"
                                    id="naamwaar-field"
                                    name="naamwaar"
                                    value={naamwaar}
                                    onChange={(e) => setNaamwaar(e.target.value)}
                                />
                            </label>

                            <label htmlFor="straat-field">
                                straat
                                <input
                                    type="straat"
                                    id="straat-field"
                                    name="straat"
                                    value={straat}
                                    onChange={(e) => setStraat(e.target.value)}
                                />
                            </label>

                            <label htmlFor="woonplaats-field">
                                woonplaats
                                <input
                                    type="woonplaats"
                                    id="woonplaats-field"
                                    name="woonplaats"
                                    value={woonplaats}
                                    onChange={(e) => setWoonplaats (e.target.value)}
                                />
                            </label>


                            <label htmlFor="opmerking-field">
                               opmerking
                                <input
                                    type="opmerking"
                                    id="opmerking-field"
                                    name="opmerking"
                                    value={opmerking}
                                    onChange={(e) => setOpmerking(e.target.value)}
                                />
                            </label>


                            <button
                                type="submit"
                                className="form-button"
                                disabled={loading}
                            >
                                Klik op de button en je gebeurtenis wordt getoond op de algemene pagina.
                            </button>




                  opmerking


                    </form>


                    </div>

                </div>
                <Link className="subredditinfo-back" to="/">
                    <img className="subredditinfo-back-icon" src={backIcon} width="20px" alt="terug"/>
                    <h3>No worrries, klikt op de terug button kom je weer op dit startpunt uit.</h3>
                </Link>
            </>
            {loading && <Loader/>}
            {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
        </>
    )}

export default GebeurtenisNieuwAanmaken;
