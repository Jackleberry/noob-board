import React, { PropTypes } from 'react';
import NavigationBar from './common/NavigationBar';
import FlashMessageList from './flash/FlashMessageList';

const NoobApp =  ({ children }) => (
  <div className="container">
    <NavigationBar />
    <FlashMessageList/>
    {children}
  </div>
);

NoobApp.propTypes = {
  children: PropTypes.object.isRequired
};

export default NoobApp;
