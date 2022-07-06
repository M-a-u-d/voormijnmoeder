import React, {useState} from "react";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import axios from "axios";
import TerugNaarHomePage from "../../components/terugNaarHomepage/TerugNaarHomePage";

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
                <Header>
                    <h1>Maak een nieuwe gebeurtenis</h1>
                </Header>
            </div>
                <div className="outer-content-container">
                    <div className="inner-content-container">

                        <h3>maak hier je een belevenis aan zodat men zich hier kan inschrijven. </h3>

                        <div className="mid-container">

                        <form onSubmit={handleSubmit}>

                            <section className="achterkant-tegels">

                            <label htmlFor="naam-field">
                                naam van de gebeurtenis
                                <input
                                    type="naam"
                                    id="naam-field"
                                    name="naam"
                                    value={ naam }
                                    onChange={(e) => setNaam(e.target.value)}
                                />
                            </label>

                            <label htmlFor="datum-field">
                                 wanneer gaat het plaatsvinden
                                <input
                                    type="text"
                                    id="datum-field"
                                    name="datum"
                                    value={ datum }
                                    onChange={(e) => setDatum(e.target.value)}
                                />
                            </label>

                            <label htmlFor="organisator-field">
                               wie organiseert het
                                <input
                                    type="text"
                                    id="organisator-field"
                                    name="username"
                                    value={ organisator }
                                    onChange={(e) => setOrganisator(e.target.value)}
                                />
                            </label>
                            </section>

                            <section className="achterkant-tegels">
                            <label htmlFor="naamwaar-field">
                                Waar gaat het plaatsvinden
                                <input
                                    type="text"
                                    id="naamwaar-field"
                                    name="naamwaar"
                                    value={ naamwaar }
                                    onChange={(e) => setNaamwaar(e.target.value)}
                                />
                            </label>

                            <label htmlFor="straat-field">
                                straat
                                <input
                                    type="text"
                                    id="straat-field"
                                    name="straat"
                                    value={ straat }
                                    onChange={(e) => setStraat(e.target.value)}
                                />
                            </label>

                            <label htmlFor="woonplaats-field">
                                woonplaats
                                <input
                                    type="test"
                                    id="woonplaats-field"
                                    name="woonplaats"
                                    value={ woonplaats }
                                    onChange={(e) => setWoonplaats (e.target.value)}
                                />
                            </label>
                            </section>

                            <section className="achterkant-tegels">
                                <label htmlFor="opmerking-field">
                                    opmerking
                                    <input
                                        type="text"
                                        id="opmerking-field"
                                        name="opmerking"
                                        value={ opmerking }
                                        onChange={(e) => setOpmerking(e.target.value)}
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="form-button"
                                    disabled={ loading }
                                >
                                    Klik op de button en je gebeurtenis wordt getoond op de algemene pagina.
                                </button>

                            </section>
                    </form>


                        </div>
                    </div>
                </div>

                <TerugNaarHomePage> </TerugNaarHomePage>
                {loading && <Loader/>}
                {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
            </>
            );
            }

export default GebeurtenisNieuwAanmaken;
