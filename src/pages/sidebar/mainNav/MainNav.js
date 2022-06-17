import React, {useContext} from 'react';
import {Link, NavLink} from "react-router-dom";
import './MainNav.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faHouse,
    faRefrigerator,
    faUserChef,
    faSparkles,
    faHatChef,
    faInfoCircle,
    faHeart
} from "@fortawesome/pro-regular-svg-icons"

import {ReactComponent as AppLogo} from "../../../assets/logo/logo.svg";
import {AccountTabContext} from "../../../helpers/AccountTabContextProvider";
import {UserContext} from "../../../helpers/UserContextProvider";

function MainNav() {

    const [, setAccountTab] = useContext(AccountTabContext);
    const [user] = useContext(UserContext);

    return (
        <aside id='main-nav__wrapper'
        >
            <Link
                id='app-logo__link'
                to='/'
            >
                <AppLogo
                    id='app-logo__img'
                />
            </Link>
            <nav
                id='main-nav__navigation'
                className='main-nav__list'
            >
                <NavLink className='main-nav__link'
                         to='/'
                >
                    <FontAwesomeIcon icon={faHouse}/> <span>Dashboard</span>
                </NavLink>
                <NavLink
                    className='main-nav__link'
                    to='/search-pantry'
                >
                    <FontAwesomeIcon icon={faRefrigerator}/> <span>Search pantry</span>
                </NavLink>
                <NavLink
                    className='main-nav__link'
                    to='/cuisines'
                >
                    <FontAwesomeIcon icon={faUserChef}/> <span>Cuisines</span>
                </NavLink>
                {user &&
                    <NavLink
                        className='main-nav__link'
                        to='/favorites'
                    >
                        <FontAwesomeIcon icon={faHeart}/> <span>Favorites</span>
                    </NavLink>
                }
                <NavLink
                    className='main-nav__link'
                    to='/popular'
                >
                    <FontAwesomeIcon icon={faSparkles}/> <span>Popular</span>
                </NavLink>
                <NavLink
                    className='main-nav__link'
                    to='/latest'
                >
                    <FontAwesomeIcon icon={faHatChef}/> <span>Latest</span>
                </NavLink>
                <NavLink
                    className='main-nav__link'
                    to='/about'
                >
                    <FontAwesomeIcon icon={faInfoCircle}/> <span>About</span>
                </NavLink>
            </nav>
            {!user &&
                <>
                    <button onClick={() => {
                        setAccountTab(arr => ({...arr, show: true, guest: 'register'}))
                    }}>
                        Register
                    </button>
                </>
            }
        </aside>
    );
}

export default MainNav;