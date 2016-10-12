import shortid from 'shortid';
import noobApi from '../api/noobApi';
import * as types from './actionTypes';
import { addFlashMessage, deleteFlashMessage } from './flashMessages';
import { loadNoobsSuccess } from './noobs';

export function addNoob(name) {
  return dispatch => {
    return noobApi.addNoob(name)
      .then(noobs => dispatch(loadNoobsSuccess(noobs)))
      .catch(error => {
        const flashId = shortid.generate();
        dispatch(addFlashMessage({
          id: flashId,
          type: "failure",
          text: "Failed to add noob due to connection failure."
        }));
        setTimeout(() => dispatch(deleteFlashMessage(flashId)), 3000);
        throw(error);
      })
  };
};

const toggleNoob = (id) => {
  return {
    type: types.TOGGLE_NOOB,
    id
  };
};

const addNoobPointLocal = (id) => {
  return {
    type: types.ADD_NOOB_POINT,
    id
  };
};

export function addNoobPoint(id) {
  return dispatch => {
    dispatch(addNoobPointLocal(id));
    return noobApi.addNoobPoint(id)
      .then(noob => dispatch(loadNoobSuccess(noob)))
      .catch(error => {
        const flashId = shortid.generate();
        dispatch(addFlashMessage({
          id: flashId,
          type: "failure",
          text: "Failed to add noob point due to connection failure."
        }));
        setTimeout(() => dispatch(deleteFlashMessage(flashId)), 2000);
        throw(error);
      });
  };
};

const addAssassinPointLocal = (id) => {
  return {
    type: types.ADD_ASSASSIN_POINT,
    id
  };
};

export function addAssassinPoint(id) {
  return dispatch => {
    dispatch(addAssassinPointLocal(id));
    return noobApi.addAssassinPoint(id)
      .then(noob => dispatch(loadNoobSuccess(noob)))
      .catch(error => {
        const flashId = shortid.generate();
        dispatch(addFlashMessage({
          id: flashId,
          type: "failure",
          text: "Failed to add assassin point due to connection failure."
        }));
        setTimeout(() => dispatch(deleteFlashMessage(flashId)), 2000);
        throw(error);
      });
  };
};

export function loadNoobSuccess(noob) {
  return {
    type: types.LOAD_NOOB_SUCCESS,
    noob
  };
}

export function loadNoob(id) {
  return dispatch => {
    return noobApi.getNoob(id)
      .then(noob => dispatch(loadNoobSuccess(noob)))
      .catch(error => {
        const flashId = shortid.generate();
        dispatch(addFlashMessage({
          id: flashId,
          type: "failure",
          text: "Failed to load noob due to connection failure."
        }));
        setTimeout(() => dispatch(deleteFlashMessage(flashId)), 3000);
        throw(error);
      });
  };
}
