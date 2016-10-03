import React, { PropTypes } from 'react';
import Noob from './Noob';

const NoobList = ({
  noobs,
  onRemoveClick,
  onNoobClick,
  onAssassinClick
}) => {
  return (
    <div className="panel panel-default">
      <ul className="list-group">
      {noobs.map(n =>
        <Noob
          key = {n.id}
          noobPoints={n.noobPoints}
          assassinPoints={n.assassinPoints}
          outOfAction = {n.outOfAction}
          onRemoveClick={() => onRemoveClick(n.id)}
          onNoobClick={() => onNoobClick(n.id)}
          onAssassinClick={() => onAssassinClick(n.id)}
        >{n.name}</Noob>
      )}
      </ul>
    </div>
  );
};

NoobList.propTypes = {
  noobs: PropTypes.array.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onNoobClick: PropTypes.func.isRequired,
  onAssassinClick: PropTypes.func.isRequired
};


export default NoobList;
