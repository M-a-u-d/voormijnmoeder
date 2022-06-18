import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PageHeader from "../../components/header/PageHeader";
import vmmlogo2 from "../../assets/vmmlogo2.svg";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";


function Profile() {
    const [profileData, setProfileData] = useState({});
    const { user } = useContext(AuthContext);

    useEffect(() => {

        // we halen de pagina-content op in de mounting-cycle
        async function fetchProfileData() {
            // haal de token uit de Local Storage om in het GET-request te bewijzen dat we geauthoriseerd zijn
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get('http://localhost:3000/660/private-content', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();
    }, [])

    return (
        <>
            <div className="page-container">
                <PageHeader>
                <h1>P r o f i e l</h1>
                </PageHeader>
            </div>

            <section>

                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>

            </section>

            {/*Als er keys in ons object zitten hebben we data, en dan renderen we de content*/}
            {Object.keys(profileData).length > 0 &&
                <section>
                    <h2>Strikt geheime profiel-content</h2>
                    <h3>{profileData.title}</h3>
                    <p>{profileData.content}</p>
                </section>
            }
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;