import React, {useContext} from 'react';
import './/Pages.css';
import {Navigate, Route, Routes} from "react-router-dom";
import routes from "../config/routes";
import {UserContext} from "../helpers/UserContextProvider";
import PageHeader from "../componenten/header/PageHeader";

function Pages() {

    const [userValue] = useContext(UserContext);

    const routeComponents = routes.map(
        ({path, element, isPrivate}) => <Route exact
                                               path={path}
                                               element={isPrivate && !userValue ? (<Navigate to='/'
                                                                                             replace/>) : (element)}
                                               key={path}/>
    );

    return (
        <main id='page__wrapper'>
            <PageHeader/>
            <div id='page-content'>
                <Routes>
                    {routeComponents}
                </Routes>
            </div>
        </main>
    );
}

export default Pages;