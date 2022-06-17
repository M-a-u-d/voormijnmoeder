import React, {useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function NavBar() {

    const { isAuth, logout } = useContext(AuthContext);
    const history = useHistory();


    return (
        <nav>
            <div className="nav-container">

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/gebeurtenis" activeClassName="active-link">Wat is er te beleven</NavLink>
                    </li>

                    <li>
                        <NavLink to="/inlog" activeClassName="active-link">Inloggen</NavLink>
                    </li>
                </ul>
            </div>
            {isAuth ?
                <button
                    type="button"
                    onClick={logout}
                >
                    Log uit
                </button>
                :
                <div>
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
                </div>
            }
        </nav>
    );
}

export default NavBar;