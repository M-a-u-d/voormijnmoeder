
import React, {useState} from "react";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import {Link} from "react-router-dom";
import backIcon from "../../assets/back-svgrepo-com.svg";
import TerugNaarHomePage from "../../components/terugNaarHomepage/TerugNaarHomePage";

function InteressanteLinks() {

    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    return(
        <>
            <div>
                <Header>
                    <h1>interessante links</h1>
                </Header>
            </div>

            <div className="outer-content-container">
                <div className="inner-content-container">

                        <h3>Dit is een paginga met een verzameling van alle instanties die er zijn in dit dorp</h3>

                    <div className="mid-container">

                        <h2>under construction.</h2>

                    </div>
                </div>
            </div>

            <TerugNaarHomePage> </TerugNaarHomePage>
            {loading && <Loader/>}
            {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
      </>
    );
}
export default InteressanteLinks