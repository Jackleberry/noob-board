import React, { PropTypes } from 'react';

const Link = ({
  active,
  onClick,
  children
}) => {
  if (active) {
    return (<span>{children}</span>);
  }
  return (
    <a href="#" onClick={onClick}>
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default Link;
