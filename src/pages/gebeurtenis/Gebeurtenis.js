import React, {useContext, useEffect, useState} from "react";
import PageHeader from "../../components/header/PageHeader";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

import GebeurtenisInfoKaart from "../../components/tegelGebeurtenisInfo/GebeurtenisInfoKaart";

import axios from "axios";
import "./Gebeurtenis.css"
import {Link, useHistory} from "react-router-dom";
import backIcon from "../../assets/back-svgrepo-com.svg";
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
            <PageHeader>
                <h1>b e L e v e n</h1>
            </PageHeader>

        <div className="outer-content-container">
            <div className="inner-content-container">

                <h2>Wat is er te doen in dit dorp</h2>
                <Link className="gebeurtenis-nieuw aanmaken" to="/gebeurtenisNieuwAanmaken">
                <img className="orangeplusteken" src={orangePlusTeken} width="20px" alt="terug"/>
                maak een nieuwe gebeurtenis.
                </Link>

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

                        {loading && <Loader/>}
                        {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
                </div>

                <h4>best leuk</h4>

                <TerugNaarHomePage> </TerugNaarHomePage>

            </div>
        </div>

    </>
    );
}

export default Gebeurtenis;