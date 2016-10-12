import React, { PropTypes } from 'react';
import AddNoob from './AddNoob';
import Footer from './Footer';
import VisibleNoobList from './VisibleNoobList';
import Header from './common/Header';
import FlashMessageList from './flash/FlashMessageList';

const NoobsPage = () => (
  <div className="container">
    <Header />
    <FlashMessageList/>
    <AddNoob/>
    <br/>
    <VisibleNoobList/>
    <Footer/>
  </div>
);

export default NoobsPage;
