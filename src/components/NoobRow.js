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
      <div className="col-xs-12 col-md-12">
        <Link className="noob-name" to={`/noob/${id}`}>
          {children}
        </Link>
        <div className="pull-right assassin" onClick={onAssassinClick} title="Assassin">
          <FontAwesome name="gitlab" size="2x"/>
          <span className="points-sm">{assassinPoints}</span>
        </div>
        <div className="pull-right noob" onClick={onNoobClick} title="Noob">
          <FontAwesome name="reddit-alien" size="2x"/>
          <span className="points-sm">{noobPoints}</span>
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
