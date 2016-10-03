import { createStore, combineReducers } from 'redux';
import React, { PropTypes } from 'react';
import AddNoob from './AddNoob';
import Footer from './Footer';
import VisibleNoobList from './VisibleNoobList';


const NoobApp =  () => (
  <div className="fluid-container">
    <AddNoob />
    <VisibleNoobList />
    <Footer />
  </div>
);

NoobApp.contextTypes = {
  store: PropTypes.object.isRequired
};

export default NoobApp;
