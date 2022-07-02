import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PageHeader from "../../components/header/PageHeader";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import "./Profile.css"

import ProfielTegel from "../../components/tegelProfiel/ProfielTegel";


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
                const result = await axios.get('http://localhost:8081/users', {
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
            <div>
                <PageHeader>
                    <h1>P r o f i e l</h1>
                    <h2>hallo { user.username }</h2>
                </PageHeader>
            </div>

            <div className="outer-content-container">
                <div className="inner-content-container">

                    <h3>op deze plek zie je gegevens die alleen jij kunt zien omdat je bent ingelogd.</h3>

                    <div className="mid-container">

                    <ProfielTegel title="basisgegevens">
                         {user &&
                             <>
                             <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                             <p><strong>Email:</strong> {user.email}</p>

                            </>
                         }
                    </ProfielTegel>
            {/*Als er keys in ons object zitten hebben we data, en dan renderen we de content*/}

                    <ProfielTegel title="Strikt geheime profiel-content">
                         {Object.keys(profileData).length > 0 &&
                            <>
                            <h3>{profileData.username}</h3>
                            <p>{profileData.email}</p>
                            <p><strong>telefoonnummer</strong>: {profileData.contactphone}</p>
                        </>
                         }
                    </ProfielTegel>

                    <ProfielTegel title="profiel foto">

                            <>
                                <p>fotoding implementeren</p>
                            </>

                    </ProfielTegel>

                        <ProfielTegel title="mijn gebeurtenissen">

                            <>
                                <p>haal content op</p>
                            </>

                        </ProfielTegel>

                    </div>
                </div>
            </div>

            <p>Terug naar de <Link to="/">Homepagina</Link></p>

            {loading && <Loader/>}
            {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}


        </>
    );
}

export default Profile;