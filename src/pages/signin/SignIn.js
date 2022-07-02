
import React, {useContext, useEffect, useState} from "react";

import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import PageHeader from "../../components/header/PageHeader";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

function SignIn() {

    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const source = axios.CancelToken.source();
    const history = useHistory ();

    // mocht onze pagina ge-unmount worden voor we klaar zijn met data ophalen, aborten we het request
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

            // log het resultaat in de console
            console.log(result.data);

            // geef de JWT token aan de login-functie van de context mee
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
                <PageHeader>

                    <h1>i n l o g g e n</h1>
                </PageHeader>
            </div>

            <div className="content">

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="username-field">
                        gebruikersnaam:
                        <input
                            type="username"
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

                <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>


                {loading && <Loader/>}
                {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}

            </div>
        </>
    );
}

export default SignIn;