import { createStore, combineReducers } from 'redux';
import noobs from '../reducers/Noobs';
import visibilityFilter from '../reducers/VisibilityFilter';

let store;
const getStore =  () => {
  if (store)
    return store;

  return createStore(combineReducers({
    noobs,
    visibilityFilter
  }), window.devToolsExtension && window.devToolsExtension());
};

export default getStore;
