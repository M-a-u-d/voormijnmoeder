import React, { useState } from 'react';
import './ImageRequestPage.css';
import axios from 'axios';
import TerugNaarHomePage from "../../components/terugNaarHomepage/TerugNaarHomePage";
import PageHeader from "../../components/header/PageHeader";

function ImageRequestPage() {
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

    try {
      // verstuur ons formData object en geef in de header aan dat het om een form-data type gaat
      // Let op: we wijzigen nu ALTIJD de afbeelding voor student 1001,
      // als je een andere student wil kiezen of dit dynamisch wil maken, pas je de url aan!

      const result = await axios.post('http://localhost:8081/users/${username}/${filename}', formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
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
            <h1>p r o f i e l f o t o</h1>
          </PageHeader>
        </div>

        <div className="outer-content-container">
          <div className="inner-content-container">

            <h2>Afbeelding uploaden en preview bekijken</h2>

            <div className="mid-container">

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

            </div>
            <TerugNaarHomePage> </TerugNaarHomePage>

          </div>
        </div>
      </>
  );
}

export default ImageRequestPage;