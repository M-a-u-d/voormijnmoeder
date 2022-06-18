import React, {useState} from "react";
import PageHeader from "../../components/header/PageHeader";
import vmmlogo2 from "../../assets/vmmlogo2.svg";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";


function Gebeurtenis () {
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    return (
    <>
        <div>
            <PageHeader>
            <h1>b e L e v e n</h1>
        </PageHeader>
        </div>

        {loading && <Loader/>}
        {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
    </>

    )
}


export default Gebeurtenis;