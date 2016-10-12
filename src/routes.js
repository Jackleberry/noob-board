import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NoobApp from './components/NoobApp';
import NoobsPage from './components/NoobsPage';
import NoobPage from './components/NoobPage';

export default (
  <Route path="/" component={NoobApp}>
    <IndexRoute component={NoobsPage}/>
    <Route path="noob/:id" component={NoobPage}/>
  </Route>
);
