import React, {useState} from "react";
import PageHeader from "../../components/header/PageHeader";
import {Link} from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import "./HomePage.css"
import HomepageTegel from "../../components/homePageTegel/HomepageTegel";
import brand from '../../assets/brand.png';
import our_story from '../../assets/our_story.png';

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

        <section>

            <HomepageTegel title="inloggen-registreren-profiel">
                <p>Als je ingelogd bent, bekijk dan de
                    <Link to="/profile"> Profielpagina</Link></p>
                <p>Je kunt ook
                    <Link to="/signin"> inloggen</Link> of jezelf
                    <Link to="/signup"> registeren</Link> als je nog geen
                    account hebt.</p>
            </HomepageTegel>

            <HomepageTegel title="instantie links">
                <p>hier zie je alle adressen van de instantie in de gemeente
                    <Link to="/profile"> Profielpagina</Link></p>
                <p>Je kunt ook
                    <Link to="/signin"> inloggen</Link> of jezelf
                    <Link to="/signup"> registeren</Link> als je nog geen
                    account hebt.</p>
            </HomepageTegel>

            <HomepageTegel title="The brand">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
            </HomepageTegel>

            <HomepageTegel img={brand} imgDescription="The brand logo" />

            <HomepageTegel img={our_story} imgDescription="The designers" />

            <HomepageTegel title="Our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum sunt. At repellendus tenetur veniam!</p>
            </HomepageTegel>

        </section>

            {loading && <Loader/>}
            {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
        </>
    );
}


export default HomePage;