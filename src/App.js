import './App.css';
import NavBar from "./components/navbar/NavBar";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import GebeurtenisNieuwAanmaken from "./pages/gebeurtnisNieuw/GebeurtenisNieuwAanmaken";
import HomePage from "./pages/homepage/HomePage";
import Gebeurtenis from "./pages/gebeurtenis/Gebeurtenis";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import InteressanteLinks from "./pages/interessanteLinks/InteressanteLinks";
import GebeurtenisInfoDetailPage from "./pages/gebeurtnisInfoDetailPage/GebeurtenisInfoDetailPage";
import ImageRequestPage from "./pages/imageRequest/ImageRequestPage";

function App() {

  return (
      <>
          <div>
            <NavBar />
            <Switch>

              <Route exact path="/">
                <HomePage />
              </Route>

              <Route exact path="/Gebeurtenis">
                <Gebeurtenis />
              </Route>

              <Route path="/profile">
                  <Profile />
              </Route>

              <Route exact path="/signin">
                <SignIn />
              </Route>

                <Route exact path="/signup">
                   <SignUp />
                </Route>

              <Route exact path="/interessanteLinks">
                  <InteressanteLinks />
              </Route>

            <Route exact path="/gebeurtenisInfoDetailPage/:naam">
                <GebeurtenisInfoDetailPage />
            </Route>

            <Route exact path="/imagerequestpage">
                <ImageRequestPage />
            </Route>

            <Route exact path="/gebeurtenisNieuwAanmaken">
                <GebeurtenisNieuwAanmaken />
            </Route>

        </Switch>

            <Footer className="outer-content-container">
                <div className="inner-content-container">
                </div>
            </Footer>

          </div>
      </>
  );
}

export default App;
