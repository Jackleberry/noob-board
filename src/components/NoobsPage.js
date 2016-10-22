import React, { PropTypes } from 'react';
import AddNoob from './AddNoob';
import Footer from './Footer';
import VisibleNoobList from './VisibleNoobList';
import Header from './common/Header';

const NoobsPage = () => (
  <div className="container">
    <AddNoob/>
    <br/>
    <VisibleNoobList/>
  </div>
);

export default NoobsPage;
