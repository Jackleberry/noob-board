import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => {
  return (
    <div>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {' | '}
      <FilterLink filter="SHOW_OUT_OF_ACTION">
        Out Of Action
      </FilterLink>
      {' | '}
      <FilterLink filter="SHOW_IN_ACTION">
        In Action
      </FilterLink>
      {' '}
    </div>
  );
};

export default Footer;
