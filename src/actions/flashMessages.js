import * as types from './actionTypes';

export function addFlashMessage(flashMessage) {
  return {
    type: types.ADD_FLASH_MESSAGE,
    flashMessage
  };
}

export function deleteFlashMessage(id) {
  return {
    type: types.DELETE_FLASH_MESSAGE,
    id
  };
}
