import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import UserContextProvider from "./helpers/UserContextProvider";
import AccountTabContextProvider from "./helpers/AccountTabContextProvider";
import MainNavContextProvider from "./helpers/MainNavContextProvider";
import {history} from "./helpers/history";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter history={history}>
            <UserContextProvider>
                <AccountTabContextProvider>
                    <MainNavContextProvider>
                        <App/>
                    </MainNavContextProvider>
                </AccountTabContextProvider>
            </UserContextProvider>
        </BrowserRouter>
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();