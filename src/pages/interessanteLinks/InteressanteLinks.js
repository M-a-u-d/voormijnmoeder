
import React, {useState} from "react";
import PageHeader from "../../components/header/PageHeader";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

function InteressanteLinks() {

    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    return(
<>
    <div>
        <PageHeader>
            <h1>v o o r m i j n m o e d e r</h1>
        </PageHeader>
    </div>
<>
    <div className="outer-content-container">
        <div className="inner-content-container">

            <h2>under construction.</h2>
            <h3>No worrries, klikt op de terug button kom je weer op dit startpunt uit.</h3>

        </div>
    </div>

</>
    {loading && <Loader/>}
    {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
</>
    )}

export default InteressanteLinks