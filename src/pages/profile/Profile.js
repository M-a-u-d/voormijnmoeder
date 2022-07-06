import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from "../../components/header/Header";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import "./Profile.css"

import ProfielTegel from "../../components/tegelProfiel/ProfielTegel";
import TerugNaarHomePage from "../../components/terugNaarHomepage/TerugNaarHomePage";

function Profile() {

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);


    const [profileData, setProfileData] = useState({});
    // eslint-disable-next-line
    const [userusername, setUserUsername] = useState([]);
    const [mijnGebeurtenissen, setMijnGebeurtenissen] = useState([])

    const {user} = useContext(AuthContext);
    const {filename} = useParams()
    const token = localStorage.getItem('token');

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function fetchProfileData() {
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
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
    async function fetchImage(e) {
        e.preventDefault();
            try {
                const result = await axios.get(`http://localhost:8081/download/${filename}`, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                })
                console.log(result.data);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }

        toggleLoading(false);
        }

        fetchImage();

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        async function fetchMijnGebeurtenissen() {
            toggleError(false);

            try {
                const { data } = await axios.get (`http://localhost:8081/gebeurtenissen/${userusername}`, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
            })
                setMijnGebeurtenissen(data);
                console.log (data)

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        fetchMijnGebeurtenissen();
        // eslint-disable-next-line
    }, []);


    return (
        <>
            <div>
                <Header>
                    <h1>P r o f i e l</h1>
                        {/*<h2>hallo {user.username}</h2>*/}
                </Header>
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
                            <p>fetchImage</p>
                            <p> <Link to="/imagerequestpage"> klik hier om je profielfoto te laden of te wijzgen</Link></p>
                        </>
                    </ProfielTegel>

                    <ProfielTegel title="mijn gebeurtenissen">
                        {Object.keys(mijnGebeurtenissen).length > 0 &&
                            <>
                                <p>mijn gemaakte gebeurtenissen: {mijnGebeurtenissen.naam}</p>
                                <p>mijn ingeschreven gebeurtenissen: {mijnGebeurtenissen.naam}</p>
                            </>
                        }
                    </ProfielTegel>

                    </div>
                </div>
            </div>

            <TerugNaarHomePage> </TerugNaarHomePage>
            {loading && <Loader/>}
            {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
        </>
    );
}

export default Profile;