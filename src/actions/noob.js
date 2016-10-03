import * as actionTypes from './actionTypes';

let nextId = 3;
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

const addNoobPoint = (id) => {
  return {
    type: actionTypes.ADD_NOOB_POINT,
    id
  };
};

const addAssassinPoint = (id) => {
  return {
    type: actionTypes.ADD_ASSASSIN_POINT,
    id
  };
};

export default {
  addNoob,
  toggleNoob,
  addNoobPoint,
  addAssassinPoint
};
