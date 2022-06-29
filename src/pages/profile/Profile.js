import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PageHeader from "../../components/header/PageHeader";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";


function Profile() {

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const [profileData, setProfileData] = useState({});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const source = axios.CancelToken.source();

        // we halen de pagina-content op in de mounting-cycle
        async function fetchProfileData() {
            // haal de token uit de Local Storage om in het GET-request te bewijzen dat we geauthoriseerd zijn

            const token = localStorage.getItem('token');

            try {
                const result = await axios.get('http://localhost:8081/users/${username)', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    cancelToken: source.token,
                });

                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();

        return function cleanup() {
            source.cancel();
        }
    }, []);

    return (
        <>

            <div className="page-container">
                <PageHeader>
                    <h1>P r o f i e l</h1>
                </PageHeader>
            </div>

            <div className="outer-content-container">
                <div className="inner-content-container">

                    <section className="profiel-opmaak">

                        <h2>Gegevens</h2>
                        <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong> </strong></p>

                     </section>

            {/*Als er keys in ons object zitten hebben we data, en dan renderen we de content*/}
            {Object.keys(profileData).length > 0 &&

                    <section className="profiel-opmaak">

                        <h2>Strikt geheime profiel-content</h2>
                        {/*<h3>{profileData.title}</h3>*/}
                        {/*<p>{profileData.content}</p>*/}

                    </section>
            }

            <p>Terug naar de <Link to="/">Homepagina</Link></p>

            {loading && <Loader/>}
            {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}

                </div>
            </div>
        </>
    );
}

export default Profile;