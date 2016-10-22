import * as types from './actionTypes';
import shortid from 'shortid';

export function addFlashMessage(flashMessage) {
  return dispatch => {
    const id = shortid.generate();
    dispatch({
      type: types.ADD_FLASH_MESSAGE,
      flashMessage: {
        id: id,
        ...flashMessage
      }
    });
    setTimeout(() => dispatch(deleteFlashMessage(id)), 3000);
  };
}

export function addFailureFlashMessage(message) {
  return addFlashMessage({
    type: "failure",
    text: message
  });
}

export function deleteFlashMessage(id) {
  return {
    type: types.DELETE_FLASH_MESSAGE,
    id
  };
}
