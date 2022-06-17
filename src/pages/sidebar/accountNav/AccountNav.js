import React, {useContext} from 'react';
import './AccountNav.css';
import {AccountTabContext} from "../../../helpers/AccountTabContextProvider";
import {UserContext} from "../../../helpers/UserContextProvider";
import Profile from "../../profile/Profile";
import * as PropTypes from "prop-types";
import SignIn from "../../signin/SignIn";
import SignUp from "../../signup/SignUp";

function FontAwesomeIcon(props) {
    return null;
}

FontAwesomeIcon.propTypes = {icon: PropTypes.any};

function AccountNav() {

    // Tab menu active state
    const [accountTab, setAccountTab] = useContext(AccountTabContext);
    const [user] = useContext(UserContext);

    return (
        <aside
            id='account-nav__wrapper'
        >
            <button id='account-nav__close'
                    className='btn btn-icon btn-round'
                    onClick={
                        () => {
                            setAccountTab(arr => ({...arr, show: !arr.show}))
                        }
                    }>
                <FontAwesomeIcon icon={faclo}/>
            </button>

            {
                accountTab.show && (
                    user ? (
                        <Profile/>
                    ) : (
                        <>
                            <nav id='account-nav__tabs-btn'>
                                <button id='btn-tab__register'
                                        className='btn btn-icon'
                                        onClick={() => {
                                            setAccountTab(arr => ({...arr, guest: 'register'}))
                                        }}>
                                    <FontAwesomeIcon icon={faUserPlus}/>
                                </button>
                                <button id='btn-tab__login'
                                        className='btn btn-icon'
                                        onClick={() => {
                                            setAccountTab(arr => ({...arr, guest: 'login'}))
                                        }}>
                                    <FontAwesomeIcon icon={faArrowRightToBracket}/>
                                </button>
                            </nav>
                            <div className='account-nav__tabs'>
                                {accountTab['guest'] === 'login' &&
                                    <SignIn/>
                                }
                                {accountTab['guest'] === 'register' &&
                                    <SignUp/>
                                }
                            </div>
                        </>
                    )
                )

            }

        </aside>
    );
}

export default AccountNav;