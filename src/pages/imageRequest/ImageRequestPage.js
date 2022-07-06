import React, { useState } from 'react';
import './ImageRequestPage.css';
import axios from 'axios';
import TerugNaarHomePage from "../../components/terugNaarHomepage/TerugNaarHomePage";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import ProfielTegel from "../../components/tegelProfiel/ProfielTegel";

function ImageRequestPage() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');


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
          <Header>
            <h1>p r o f i e l f o t o</h1>
          </Header>
        </div>

        <div className="outer-content-container">
          <div className="inner-content-container">

            <h2>Hier kun je een profiel foto uploaden.  </h2>

            <div className="mid-container">

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
            </div>
          </div>
        </div>

        <TerugNaarHomePage> </TerugNaarHomePage>
        {loading && <Loader/>}
        {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
    </>
  );
}

export default ImageRequestPage;