import React, { PropTypes } from 'react';

const NoobApp =  ({ children }) => (
  <div className="container">
    {children}
  </div>
);

NoobApp.propTypes = {
  children: PropTypes.object.isRequired
};

export default NoobApp;
