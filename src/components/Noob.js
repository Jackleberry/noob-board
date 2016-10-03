import React, { PropTypes } from 'react';

const Noob = ({outOfAction, onClick, children}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        outOfAction ? 'line-through' : 'none'
    }}
  >
    {children}
  </li>
);

Noob.propTypes = {
  outOfAction: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Noob;
