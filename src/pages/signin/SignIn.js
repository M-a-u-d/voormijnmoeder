
import React, {useContext, useEffect, useState} from "react";

import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import Header from "../../components/header/Header";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import TerugNaarHomePage from "../../components/terugNaarHomepage/TerugNaarHomePage";

function SignIn() {

    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const source = axios.CancelToken.source();
    const history = useHistory ();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }

    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        toggleError(false);

        try {

            const result = await axios.post('http://localhost:8081/authenticate', {
                username: username,
                password: password,
            });

            console.log(result.data);

            login(result.data.jwt);

history.push("/profile")

        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>

            <div className="page-container">
                <Header>

                    <h1>i n l o g g e n</h1>
                </Header>
            </div>

            <div className="outer-content-container">
            <div className="inner-content-container">

                <h3>hier kun je inloggen</h3>

            <div className="mid-container">

                <form onSubmit={handleSubmit}>
                    <label htmlFor="username-field">
                        gebruikersnaam:
                        <input
                            type="text"
                            id="username-field"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>

                    <label htmlFor="password-field">
                        Wachtwoord:
                        <input
                            type="password"
                            id="password-field"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    {error && <p className="error">Combinatie van Gebruikersnaam en wachtwoord is onjuist</p>}

                    <button
                        type="submit"
                        className="form-button"
                    >
                        Inloggen
                    </button>
                </form>


            </div>
                <h2>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</h2>
            </div>
            </div>

            <TerugNaarHomePage> </TerugNaarHomePage>
            {loading && <Loader/>}
            {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}

        </>
    );
}

export default SignIn;