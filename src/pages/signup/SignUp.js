import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import Header from "../../components/header/Header";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import TerugNaarHomePage from "../../components/terugNaarHomepage/TerugNaarHomePage";

function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const source = axios.CancelToken.source();
    const history = useHistory();


    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
        // eslint-disable-next-line
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:8081/users', {
                email: email,
                password: password,
                username: username,
                enabled: true,
            },{
                cancelToken: source.token,
            });

            history.push('/signin');

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
                    <h1>r e g i s t r e r e n</h1>
                </Header>
            </div>

            <div className="outer-content-container">
                <div className="inner-content-container">


                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
                    harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
                    doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?
                </h4>

                    <div className="mid-container">

                <form onSubmit={handleSubmit}>
                    <label htmlFor="email-field">
                        Emailadres:
                        <input
                            type="email"
                            id="email-field"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    <label htmlFor="username-field">
                        Gebruikersnaam:
                        <input
                            type="text"
                            id="username-field"
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

                    {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}

                    <button
                        type="submit"
                        className="form-button"
                        disabled={loading}
                    >
                        Registreren
                    </button>

                </form>
                    </div>
                <h2>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</h2>


                </div>
            </div>

            <TerugNaarHomePage> </TerugNaarHomePage>
            {loading && <Loader/>}
            {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
        </>
    );
}

export default SignUp;