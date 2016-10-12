import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Noob from './Noob';

const mapStateToProps = (state) => {
  return {
    noob: state.visibleNoob
  };
};

export default connect(mapStateToProps)(Noob);
