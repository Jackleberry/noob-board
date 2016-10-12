import React, { PropTypes } from 'react';
import NoobRow from './NoobRow';

const NoobList = ({
  noobs,
  actions
}) => {
  return (
    <div className="row">
    <div className="panel panel-default col-md-4 col-md-offset-4">
      <ul className="list-group">
      {noobs.map(n =>
        <NoobRow
          key = {n.id}
          id = {n.id}
          noobPoints={n.noobPoints}
          assassinPoints={n.assassinPoints}
          outOfAction = {n.outOfAction}
          onRemoveClick={() => actions.toggleNoob(n.id)}
          onNoobClick={() => actions.addNoobPoint(n.id)}
          onAssassinClick={() => actions.addAssassinPoint(n.id)}
        >{n.name}</NoobRow>
      )}
      </ul>
    </div>
    </div>
  );
};

NoobList.propTypes = {
  noobs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


export default NoobList;
