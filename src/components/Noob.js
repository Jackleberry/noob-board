import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as noobActions from '../actions/noob';
import FontAwesome from 'react-fontawesome';

class Noob extends Component {

  componentWillMount() {
    this.props.actions.loadNoob(this.props.params.id);
  }

  render() {
    const { actions, visibleNoob } = this.props;
    const { id } = this.props.params;
    if (visibleNoob) {
      return (
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="row">
              <div className="col-xs-3">
                <Link to="/noobs" class="linkie">
                  <FontAwesome name="angle-left linkie" size="2x"/><br/>
                </Link>
              </div>
              <div className="col-xs-6 text-center heading">
                <h1>{visibleNoob.name}</h1>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-xs-6 text-center noob" onClick={() => actions.addNoobPoint(id)}>
                  <FontAwesome name="reddit-alien" size="4x"/><br/>
                  <span className="points-lg">{visibleNoob.noobPoints}</span>
              </div>
              <div className="col-xs-6 text-center assassin" onClick={() => actions.addAssassinPoint(id)}>
                  <FontAwesome name="gitlab" size="4x"/><br/>
                  <span className="points-lg">{visibleNoob.assassinPoints}</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-md-12">
            Loading
          </div>
        </div>
      );
    }
  }
}

Noob.propTypes = {
  visibleNoob: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    visibleNoob: state.visibleNoob
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(noobActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Noob);
