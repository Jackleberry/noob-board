import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const NoobRow = ({
  id,
  noobPoints,
  assassinPoints,
  outOfAction,
  onRemoveClick,
  onNoobClick,
  onAssassinClick,
  children
}) => (
  <li className="list-group-item">
    <div className="row">
    <Link to={`/noob/${id}`}>
    <div
      className="col-xs-6 col-md-6"
      style={{
        textDecoration:
          outOfAction ? 'line-through' : 'none'
      }}>
      {children}
    </div>
    </Link>
    <div className="col-xs-6 col-md-6">
      <div className="btn btn-default pull-right assassin badge alert-success" onClick={onAssassinClick} title="Assassin">
        <FontAwesome name='gitlab' size='2x'/>&nbsp;
        <span style={{fontSize: 20}}>{assassinPoints}</span>
      </div>
      <span className="pull-right">&nbsp;</span>
      <div className="btn btn-default pull-right noob badge alert-warning" onClick={onNoobClick} title="Noob">
        <FontAwesome name='reddit-alien' size='2x'/>&nbsp;
        <span style={{fontSize: 20}}>{noobPoints}</span>
      </div>
    </div>
    </div>
  </li>
);

NoobRow.propTypes = {
  id: PropTypes.string.isRequired,
  noobPoints: PropTypes.number.isRequired,
  assassinPoints: PropTypes.number.isRequired,
  outOfAction: PropTypes.bool.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onNoobClick: PropTypes.func.isRequired,
  onAssassinClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};


export default NoobRow;
