import React, { useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import TegelGebeurtenisDetail from '../../components/tegelGebeurtenisDetail/TegelGebeurtenisDetail';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import Header from "../../components/header/Header";
import TerugNaarHomePage from "../../components/terugNaarHomepage/TerugNaarHomePage";

function GebeurtenisInfoDetailPage() {


    const [details, setDetails] = useState({});
    const [userUsername, setUserUsername ] = useState('')
    const [gebeurtenisNaam, setGebeurtenisNaam ] = useState('')

    const history = useHistory();
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const source = axios.CancelToken.source();

    const { naam } = useParams();
    const { userusername } = useParams()
    const { gebeurtenisnaam } = useParams()

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);

            const source = axios.CancelToken.source();

            const token = localStorage.getItem('token');
                try {
                    const response = await axios.get(`http://localhost:8081/gebeurtenissen/${naam}`,{
                        headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,

                    },
                    cancelToken: source.token,
                });
                    setDetails(response.data);
                    console.log(response.data);

                } catch (e) {
                    console.error(e);
                    toggleError(true);
                }
                toggleLoading(false);
            }

            fetchData();
        return function cleanup() {
            source.cancel();
        }

        }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        const token = localStorage.getItem('token');

        try {
            await axios.post(`http://localhost:8081/geus/${userusername}/${gebeurtenisnaam}`,  {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    userusername : userusername,
                    gebeurtenisnaam : gebeurtenisnaam,

                }},{
                cancelToken: source.token,
            });

            history.push('/profiel');

        } catch(e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <>
            <div>
                <Header>
                    <h2>b e L e v e n - d e t a i l</h2>
                    <h1>{ naam }</h1>
                </Header>
            </div>

                <div className="outer-content-container ">
                    <div className="inner-content-container">

                        <h3>ik schrijf me in</h3>

                        <div className="mid-container">

                            <section className="achterkant-tegels">
                            {Object.keys(details).length > 0 && (
                            <div>
                                {details &&
                                <TegelGebeurtenisDetail
                                    omschrijving={details.opmerking}
                                    organisator = {details.organisator}
                                    woonplaats={details.woonplaats}
                                    straat={details.naamwaar}
                                    wanneer={details.wanneer}
                                />
                                    }
                            </div>
                        )}
                            </section>
<section className="achterkant-tegels">
                            <form onSubmit={handleSubmit}>

                                <label htmlFor="userUsername-field">
                                    Mijn naam :
                                    <input
                                        type="text"
                                        id="userUsername-field"
                                        name="userUsername"
                                        value={ userUsername }
                                        onChange={(e) => setUserUsername(e.target.value)}
                                    />
                                </label>

                                <label htmlFor="gebeurtenisNaam-field">
                                    Mijn gebeurtenis :
                                    <input
                                        type="text"
                                        id="gebeurtenisNaam-field"
                                        name="gebeurtenisNaam"
                                        value={ gebeurtenisNaam }
                                        onChange={(e) => setGebeurtenisNaam(e.target.value)}
                                    />
                                </label>

                                <button
                                    type="submit"
                                    className="form-button"
                                    disabled={loading}
                                >
                                    Klik op de button en je hebt je ingeschreven.
                                </button>

                            </form>
                        </section>
                        </div>
                    </div>
                </div>

                <TerugNaarHomePage> </TerugNaarHomePage>
                {loading && <Loader/>}
                {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
        </>
    );
}

export default GebeurtenisInfoDetailPage;