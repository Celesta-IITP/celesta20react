import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Photos from "components/Gallery/gallery.js"
import SigninPage from "views/examples/SigninPage.js";
import Sponsors from "components/Sponsors/sponsors.js"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/components" render={(props) => <Index {...props} />} />
          <Route
            path="/landing-page"
            render={(props) => <LandingPage {...props} />}
          />
          <Route
            path="/register-page"
            render={(props) => <RegisterPage {...props} />}
          />
          <Route
            path="/signin-page"
            render={(props) => <SigninPage {...props} />}
          />
          <Route
            path="/profile-page"
            render={(props) => <ProfilePage {...props} />}
          />
          <Route
            path="/gallery"
            render={(props) => <Photos {...props} />}
          />
          <Route
            path="/sponsors"
            render={(props) => <Sponsors {...props} />}
          />
          
          <Redirect from="/" to="/components" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
