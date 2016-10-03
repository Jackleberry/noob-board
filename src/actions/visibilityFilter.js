import * as actionTypes from './actionTypes';

const toggleFilter = (filter) => {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  };
};

export default {
  toggleFilter
};
