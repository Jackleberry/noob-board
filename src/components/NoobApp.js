import React, { PropTypes } from 'react';
import AddNoob from './AddNoob';
import Footer from './Footer';
import VisibleNoobList from './VisibleNoobList';


const NoobApp =  () => (
  <div className="container">
    <h1 className="text-center">Noob Board</h1>
    <AddNoob />
    <hr/>
    <VisibleNoobList />
    <hr/>
    <Footer />
  </div>
);

NoobApp.contextTypes = {
  store: PropTypes.object.isRequired
};

export default NoobApp;
