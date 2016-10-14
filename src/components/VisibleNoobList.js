import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import NoobList from './NoobList';
import * as noobActions from '../actions/noob';
import * as noobsActions from '../actions/noobs';
import { bindActionCreators } from 'redux';


class VisibleNoobList extends Component {

  componentWillMount() {
    this.props.noobsActions.loadNoobs();
  }

  render() {
    return (
      <NoobList
        noobs={this.props.noobs}
        actions={this.props.actions}
      />
    );
  }
}

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

VisibleNoobList.propTypes = {
  noobsActions: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  noobs: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    noobs: noobsInAction({...state})
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(noobActions, dispatch),
    noobsActions: bindActionCreators(noobsActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibleNoobList);
