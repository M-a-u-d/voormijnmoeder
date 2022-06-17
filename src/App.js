import React, {useContext} from 'react';
import './App.css';
import {
    Redirect,
    Route,
} from "react-router-dom";
import NavBar from "./componenten/NavBar/NavBar";
import HomePage from "./pages/home/HomePage";
import Gebeurtenis from "./pages/events/Gebeurtenis";
import {AuthContext} from "./context/AuthContext";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Profile from "./pages/profile/Profile";
import {ToastContainer} from "react-toastify";
import {classNames} from "./helpers/classNames";
import MainNav from "./pages/sidebar/mainNav/MainNav";
import Pages from "./pages/Pages";
import AccountNav from "./pages/sidebar/accountNav/AccountNav";
import AvatarContextProvider from "./helpers/AvatarContextProvider";
import {AccountTabContext} from "./helpers/AccountTabContextProvider";
import {MainNavContext} from "./helpers/MainNavContextProvider";

function App() {
    const { isAuth } = useContext(AuthContext);
    const [accountTab, setAccountTab] = useContext(AccountTabContext);
    const [mainNav] = useContext(MainNavContext);

    return (
      <>
      <NavBar />
          <div className="content">


                  <Route exact path="/">
                    <HomePage />
                  </Route>

                  <Route exact path="/Gebeurtenis">
                        <Gebeurtenis />
                  </Route>

                  <Route path="/profile">
                      {isAuth ? <Profile /> : <Redirect to="/" />}
                  </Route>

                  <Route exact path="/signin">
                      <SignIn />

                  </Route>
                  <Route exact path="/signup">
                      <SignUp />
                  </Route>


          </div>

          <>
              <ToastContainer/>
              <div id='app__wrapper'
                   className={classNames(
                       mainNav['show'] ? 'main-show' : 'main-hidden',
                       accountTab['show'] ? 'account-show' : 'account-hidden'
                   )}
              >
                  <MainNav/>
                  <AvatarContextProvider>
                      <Pages/>
                      <AccountNav/>
                  </AvatarContextProvider>
                  <span className='backdrop'
                        onClick={() => {
                            setAccountTab(arr => ({...arr, show: !arr.show}))
                        }}/>
              </div>
          </>
      </>
  );
}

export default App;
