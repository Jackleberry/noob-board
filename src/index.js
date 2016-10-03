import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
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
    <Provider store={store}>
      <NoobApp />
    </Provider>,
    document.getElementById('app'));
};

store.subscribe(render);
render();
