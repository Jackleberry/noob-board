import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NoobApp from './components/NoobApp';
import NoobsPage from './components/NoobsPage';
import NoobPage from './components/NoobPage';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';
import LandingPage from './components/LandingPage';

export default (
  <Route path="/" component={NoobApp}>
    <IndexRoute component={LandingPage}/>
    <Route path="noob/:id" component={NoobPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="signup" component={SignupPage}/>
    <Route path="noobs" component={NoobsPage}/>
  </Route>
);
