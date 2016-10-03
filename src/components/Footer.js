import React, { PropTypes } from 'react';
import FilterLink from './FilterLink';

const Footer = ({store}) => {
  return (
    <div>
      Showing:
      {' '}
      <FilterLink
        filter="SHOW_ALL"
        store={store}
        >
        All</FilterLink>
      {' '}
      <FilterLink
        filter="SHOW_OUT_OF_ACTION"
        store={store}
        >
        Out Of Action
      </FilterLink>
      {' '}
      <FilterLink
        filter="SHOW_IN_ACTION"
        store={store}
        >
        In Action
      </FilterLink>
      {' '}
    </div>
  );
};

Footer.propTypes = {
  store: PropTypes.object.isRequired
};

export default Footer;
