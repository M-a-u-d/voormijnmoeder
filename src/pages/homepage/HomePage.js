
import React from "react";
import PageHeader from "../../components/header/Header";
import vmmlogo2 from "../../assets/vmmlogo2.svg"
import {Link} from "react-router-dom";

function HomePage () {

    return (
        <>
        <div className="page-container">
            <PageHeader
                image={vmmlogo2}

            />
            <h1>voor mijn moeder </h1>
        </div>
    <section>
        <p>Als je ingelogd bent, bekijk dan de <Link to="/profile">Profielpagina</Link></p>
        <p>Je kunt ook <Link to="/signin">inloggen</Link> of jezelf <Link to="/signup">registeren</Link> als je nog geen
            account hebt.</p>
    </section>
</>
    );
}


export default HomePage;