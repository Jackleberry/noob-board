import { createStore, combineReducers } from 'redux';
import noobs from '../reducers/Noobs';
import visibilityFilter from '../reducers/VisibilityFilter';
import React, { PropTypes } from 'react';
import AddNoob from './AddNoob';
import Footer from './Footer';
import VisibleNoobList from './VisibleNoobList';

// const store = createStore(combineReducers({
//   noobs,
//   visibilityFilter
// }), window.devToolsExtension && window.devToolsExtension());


const NoobApp =  ({store}) => (
  <div className="fluid-container">
    <h1>NOOBS</h1>
    <AddNoob store={store} />
    <VisibleNoobList store={store}/>
    <Footer store={store} />
  </div>
);

NoobApp.propTypes = {
  store: PropTypes.object.isRequired
  // noobs: PropTypes.array.isRequired,
  // visibilityFilter: PropTypes.string.isRequired
};

export default NoobApp;
