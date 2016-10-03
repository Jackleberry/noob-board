import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import noobs from './reducers/Noobs';
import visibilityFilter from './reducers/VisibilityFilter';
import React from 'react';
import ReactDOM from 'react-dom';
import NoobApp from './components/NoobApp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  noobs: [
    {
      id: 0,
      name: "Jackie",
      noobPoints: 4,
      assassinPoints: 1,
      outOfAction: false
    },
    {
      id: 1,
      name: "Weasel",
      noobPoints: 14,
      assassinPoints: 1,
      outOfAction: false
    },
    {
      id: 2,
      name: "Supertrolly",
      noobPoints: 16,
      assassinPoints: 1,
      outOfAction: false
    }
  ],
  visibilityFilter: "SHOW_ALL"
};

const store = createStore(combineReducers({
  noobs,
  visibilityFilter
}), initialState, window.devToolsExtension && window.devToolsExtension());

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <NoobApp />
    </Provider>,
    document.getElementById('app'));
};

store.subscribe(render);
render();
