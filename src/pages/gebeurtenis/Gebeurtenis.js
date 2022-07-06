import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import GebeurtenisInfoKaart from "../../components/tegelGebeurtenisInfo/GebeurtenisInfoKaart";
import axios from "axios";
import "./Gebeurtenis.css"
import { Link } from "react-router-dom";
import orangePlusTeken from "../../assets/orange-plus-sign.svg"
import TerugNaarHomePage from "../../components/terugNaarHomepage/TerugNaarHomePage";


function Gebeurtenis () {
    const [gebeurtenissen, setGebeurtenissen] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);
            toggleError(false);

            try {
                const { data } = await axios.get (`http://localhost:8081/gebeurtenissen`);
                setGebeurtenissen(data);
                console.log (data)

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        fetchData();

    }, []);

    if (loading) return `loading...`

    return (
    <>
        <Header>
            <h1>b e L e v e n</h1>
            <h2>Wat is er te doen in dit dorp</h2>
        </Header>

        <main>
        <div className="outer-content-container">
            <div className="inner-content-container">

                <div className="tussen">
                    <h3>Indien je klikt op een beLevenis dan kom je in de detail pagina en hier kun je, je inschrijven</h3>
                    <p>Als je klik op het plusteken hieronder kun je zelf ook een beLevenis aanmaken. Je moet je wel hiervoor registeren en inloggen</p>

                    <Link to="/gebeurtenisNieuwAanmaken">
                    <img src={orangePlusTeken} width="20px" alt="terug"/>
                    maak een nieuwe gebeurtenis.
                    </Link>
                </div>

                <div className="mid-container">

                    {gebeurtenissen.map((gebeurtenis) => {
                        return (
                            <Link key={gebeurtenis.naam} to={`/gebeurtenisInfoDetailPage/${gebeurtenis.naam}`}>

                                    <GebeurtenisInfoKaart
                                        naam={ gebeurtenis.naam }
                                        organisator={ gebeurtenis.organisator }
                                        waar={ gebeurtenis.waar }
                                        naamwaar={ gebeurtenis.naamwaar }
                                        straat={ gebeurtenis.straat }
                                        plaats={ gebeurtenis.woonplaats }
                                        opmerking={ gebeurtenis.opmerking }
                                    />

                            </Link>
                    )

                })}

                </div>
            </div>
        </div>
</main>
        <TerugNaarHomePage> </TerugNaarHomePage>
        {loading && <Loader/>}
        {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
    </>
    );
}

export default Gebeurtenis;