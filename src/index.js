/*eslint-disable import/default*/
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import initialState from './store/initialState';
import routes from './routes';
import configureStore from './store/configureStore';
import { loadNoobs } from './actions/noobs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const store = configureStore(initialState);
store.dispatch(loadNoobs());

render(
    <Provider store={store}>
      <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('app')
);
