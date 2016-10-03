import React, { PropTypes } from 'react';

const Noob = ({noobPoints, assassinPoints, outOfAction, onRemoveClick, onNoobClick, onAssassinClick, children}) => (
  <li className="list-group-item">
    <div className="row">
    <div className="col-xs-9 col-md-9"
      onClick={onRemoveClick}
      style={{
        textDecoration:
          outOfAction ? 'line-through' : 'none'
      }}
    >
      {children}
    </div>
    <div className="col-xs-3 col-md-3">
      <button className="btn btn-default pull-right noob" onClick={onNoobClick} title="Noob">
        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;
        {noobPoints}
      </button>
      <span className="pull-right">&nbsp;</span>
      <button className="btn btn-default pull-right assassin" onClick={onAssassinClick} title="Assassin">
        <span className="glyphicon glyphicon-sunglasses" aria-hidden="true"></span>&nbsp;
        {assassinPoints}
      </button>
    </div>
    </div>
  </li>
);

Noob.propTypes = {
  noobPoints: PropTypes.number.isRequired,
  assassinPoints: PropTypes.number.isRequired,
  outOfAction: PropTypes.bool.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onNoobClick: PropTypes.func.isRequired,
  onAssassinClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Noob;
