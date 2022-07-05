import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import PageHeader from "../../components/header/PageHeader";
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


    //voor de foto- inladen
    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');

    const { user } = useContext(AuthContext);

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function fetchProfileData() {
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

    function handleImageChange(e) {
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile);
        setFile(uploadedFile);
        setPreviewUrl(URL.createObjectURL(uploadedFile));
    }

    async function sendImage(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        const token = localStorage.getItem('token');

        try {

            const result = await axios.post('http://localhost:8081/users/${username}/photo', formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                })
            console.log(result.data);
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <div>
                <PageHeader>
                    <h1>P r o f i e l</h1>
                        {/*<h2>hallo {user.username}</h2>*/}
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
                            <form onSubmit={sendImage}>
                                <label htmlFor="student-image">
                                    Kies afbeelding:
                                    <input type="file" name="image-field" id="student-image" onChange={handleImageChange}/>
                                </label>

                                {previewUrl &&
                                <label>
                                    Preview:
                                    <img src={previewUrl} alt="Voorbeeld van de afbeelding die zojuist gekozen is" className="image-preview"/>
                                </label>
                                }
                                <button type="submit">Uploaden</button>
                            </form>
                        </>
                    </ProfielTegel>

                    <ProfielTegel title="mijn gebeurtenissen">
                        <>
                            <p>haal content op - under construction</p>
                        </>
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