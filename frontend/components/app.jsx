import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
// import HelloContainer from './home/hello_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import WelcomeContainer from './welcome/welcome_container';
import SessionFormContainer from './session_form/session_form_container';
import UserPageContainer from './user_page/user_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>

    <NavBarContainer />

    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/user/:username" component={UserPageContainer} />
    </Switch>

  </div>
);

export default App;
