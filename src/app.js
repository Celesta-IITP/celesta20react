import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

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
            path="/profile-page"
            render={(props) => <ProfilePage {...props} />}
          />
          <Redirect from="/" to="/components" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
