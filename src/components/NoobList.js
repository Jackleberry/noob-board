import React, { PropTypes } from 'react';
import Noob from './Noob';

const NoobList = ({
  noobs,
  onNoobClick
}) => {
  return (
    <ul>
      {noobs.map(n =>
        <Noob
          key = {n.id}
          outOfAction = {n.outOfAction}
          onClick={() => onNoobClick(n.id)}
        >{n.name}</Noob>
      )}
    </ul>
  );
};

NoobList.propTypes = {
  noobs: PropTypes.array.isRequired,
  onNoobClick: PropTypes.func.isRequired
};


export default NoobList;
