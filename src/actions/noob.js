import * as actionTypes from './actionTypes';

let nextId = 0;
const addNoob = (name) => {
  return {
    type: actionTypes.ADD_NOOB,
    id: nextId++,
    name
  };
};

const toggleNoob = (id) => {
  return {
    type: actionTypes.TOGGLE_NOOB,
    id
  };
};

export default {
  addNoob,
  toggleNoob
};
