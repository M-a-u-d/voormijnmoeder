
import './App.css';
import NavBar from "./components/navbar/NavBar";
import {Redirect, Route, Switch} from "react-router-dom";
import {useContext} from "react";
import HomePage from "./pages/homepage/HomePage";
import Gebeurtenis from "./pages/gebeurtenis/Gebeurtenis";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import {AuthContext} from "./context/AuthContext";

function App() {
  const { isAuth } = useContext(AuthContext);


  return (
      <>
        <NavBar />
        <div className="content">

        <Switch>
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
        </Switch>

        </div>

      </>
  );
}

export default App;
