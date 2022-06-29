import React, {useState} from "react";
import PageHeader from "../../components/header/PageHeader";
import {Link} from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import HomepageTegel from "../../components/homePageTegel/HomepageTegel";
import our_story from '../../assets/ouderen-aan-tafell.png';
import "./HomePage.css"

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

        <>
            <div className="outer-content-container">
                <div className="inner-content-container">

                    <h2>Dit is de startpunt pagina, klikt op onderstaande en stap naar de details.</h2>
                    <h3>No worrries als je klikt op de terug button kom je weer op dit startpunt uit.</h3>

                    <div className="home-page-container">

                        <HomepageTegel title="inloggen-registreren-profiel">
                            <p>Als je ingelogd bent, bekijk dan de
                                <Link to="/profile"> Profielpagina</Link></p>
                            <p>Je kunt ook
                                <Link to="/signin"> inloggen</Link> of jezelf
                                <Link to="/signup"> registeren</Link> als je nog geen
                                account hebt.</p>
                        </HomepageTegel>

                        <HomepageTegel title="beLeven">
                           <p> <Link to="/gebeurtenis"> Wat valt er te beLeven</Link></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                        </HomepageTegel>

                        <HomepageTegel title="interessante links">
                            <p>hier zie je alle adressen van de instantie in de gemeente
                                <Link to="/interessanteLinks"> Interessante links pagina</Link></p>
                        </HomepageTegel>

                        <HomepageTegel img={our_story} imgDescription="The party people" />

                        <HomepageTegel title="hoe het werkt">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum sunt. At repellendus tenetur veniam!</p>
                        </HomepageTegel>

                    </div>
                </div>
            </div>

        </>

            {loading && <Loader/>}
            {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
        </>
    );
}


export default HomePage;