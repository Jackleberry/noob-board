import * as types from '../actions/actionTypes';
import findIndex from 'lodash/findIndex';

export default (state=[], action) => {
  switch (action.type) {
    case types.ADD_FLASH_MESSAGE:
      return [
        ...state,
        action.flashMessage
      ];
    case types.DELETE_FLASH_MESSAGE: {
      const index = findIndex(state, {id: action.id});
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
};
