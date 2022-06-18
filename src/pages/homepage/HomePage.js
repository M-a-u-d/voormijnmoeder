
import React, {useState} from "react";
import PageHeader from "../../components/header/PageHeader";
import vmmlogo2 from "../../assets/vmmlogo2.svg"
import {Link} from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

function HomePage () {
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    return (
        <>
        <div>
            <PageHeader>
            <h1>v o o r  m i j n  m o e d e r</h1>
            </PageHeader>
        </div>

        <section className="inner-content-container">
        <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
        <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/signup">registeren</Link> als je nog geen
            account hebt.</p>
        </section>

            {loading && <Loader/>}
            {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
        </>
    );
}


export default HomePage;