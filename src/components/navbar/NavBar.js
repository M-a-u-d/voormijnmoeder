import React, {useContext} from 'react';
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import "./NavBar.css";
import vmnlogo2 from "../../assets/vmmlogo2.svg"


function NavBar() {

    const { isAuth, logout } = useContext(AuthContext);
    const history = useHistory();


    return (
        <nav className="container">
            <div className="inner-content-container">
                <Link to="/">
                    <span className="mid-container">
                        <img src={vmnlogo2} alt="logo"/>
                    </span>
                </Link>
            </div>


            <div className="inner-content-container">

            {isAuth ?
                <div>

                    <button
                        type="button"
                        onClick={() =>history.push(`/`)}
                    >
                        Beginpagina
                    </button>


                    <button
                        type="button"
                        onClick={() =>history.push(`/profile`)}
                    >
                        Profiel
                    </button>

                    <button
                        type="button"
                        onClick={logout}
                    >
                        Log uit
                    </button>

                    <button
                        type="button"
                        onClick={() =>history.push(`/Gebeurtenis`)}
                    >
                        Belevenissen
                    </button>

                    <button
                        type="button"
                        onClick={() =>history.push(`/gebeurtenisnieuwaanmaken`)}
                    >
                        nieuwe belevenis maken
                    </button>


                </div>
                :


                <div>
                    <button
                        type="button"
                        onClick={() =>history.push(`/`)}
                    >
                        Beginpagina
                    </button>

                    <button
                        type="button"
                        onClick={() =>history.push(`/Gebeurtenis`)}
                    >
                        Belevenissen
                    </button>

                    <button
                        type="button"
                        onClick={() => history.push('/signin')}
                    >
                        Log in
                    </button>

                    <button
                        type="button"
                        onClick={() => history.push('/signup')}
                    >
                        Registreren
                    </button>

                    <button
                        type="button"
                        onClick={() =>history.push(`/profile`)}
                    >
                        Profiel
                    </button>
                </div>


            }

        </div>
    </nav>
    );
}

export default NavBar;