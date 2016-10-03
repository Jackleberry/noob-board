import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import NoobList from './NoobList';
import noobActions from '../actions/noob';

const noobsInAction = ({noobs, visibilityFilter}) => {
  switch (visibilityFilter) {
    case "SHOW_ALL":
      return noobs;
    case "SHOW_OUT_OF_ACTION":
      return noobs.filter(noob => noob.outOfAction);
    case "SHOW_IN_ACTION":
      return noobs.filter(noob => !noob.outOfAction);
    default:
      return noobs;
  }
};

const mapStateToProps = (state) => {
  return {
    noobs: noobsInAction({...state})
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveClick: id => dispatch(noobActions.toggleNoob(id)),
    onNoobClick: id => dispatch(noobActions.addNoobPoint(id)),
    onAssassinClick: id => dispatch(noobActions.addAssassinPoint(id))
  };
};

const VisibleNoobList = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoobList);

export default VisibleNoobList;
