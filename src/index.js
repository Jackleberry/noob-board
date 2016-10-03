import { createStore, combineReducers } from 'redux';
import noobs from './reducers/Noobs';
import visibilityFilter from './reducers/VisibilityFilter';
import React from 'react';
import ReactDOM from 'react-dom';
import NoobApp from './components/NoobApp';

const store = createStore(combineReducers({
  noobs,
  visibilityFilter
}), window.devToolsExtension && window.devToolsExtension());

const render = () => {
  ReactDOM.render(
    <NoobApp store={store} />,
    document.getElementById('app'));
};

store.subscribe(render);
render();
