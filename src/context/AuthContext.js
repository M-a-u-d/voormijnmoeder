import {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import isTokenValid from "../helpers/isTokenValid";


export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();


    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token &&isTokenValid(token)) {
            const decoded = jwt_decode(token);
            fetchUserData(decoded.sub, token)

        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });

        }
    }, []);

    function login(JWT) {
        localStorage.setItem('token', JWT);
        const decoded = jwt_decode(JWT);
        console.log(decoded)

        fetchUserData(decoded.sub, JWT, '/profile');

    }

    function logout() {
        // localStorage.clear();
        console.log('De gebruiker is ingelogd!');
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        history.push('/');
    }

    async function fetchUserData(username, token, redirectUrl) {
        try {
            const result = await axios.get(`http://localhost:8081/users/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });

            // if (redirectUrl) {
            //     history.push(redirectUrl);
            // }

        } catch (e) {
            console.error(e);
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {/*{isAuth.status === 'done' ? children : <p>Loading...</p>}*/}
            {isAuth.status === 'done' && children}
            {isAuth.status === 'pending' && <p>Loading...</p>}
            {isAuth.status === 'error' && <p>Error! Refresh de pagina!</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;