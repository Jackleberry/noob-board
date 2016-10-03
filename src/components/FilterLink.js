import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Link from './Link';
import filterActions from '../actions/visibilityFilter';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
    children: ownProps.children
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(filterActions.toggleFilter(ownProps.filter))
  };
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
