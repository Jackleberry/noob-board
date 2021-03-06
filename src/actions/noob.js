import noobApi from '../api/noobApi';
import * as types from './actionTypes';
import { addFailureFlashMessage } from './flashMessages';
import { loadNoobsSuccess } from './noobs';


export function addNoob(name) {
  return dispatch => {
    return noobApi.addNoob(name)
      .then(
        res => dispatch(loadNoobsSuccess(res.data)),
        err => dispatch(addFailureFlashMessage(err.response.data.error))
      )
      .catch(error => dispatch(addFailureFlashMessage("Failed to add noob due.")));
  };
}

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
    return noobApi.addNoobPoint(id).then(
      res => {},
      err => dispatch(addFailureFlashMessage(err.response.data.error))
    ).catch(error => {
      dispatch(addFailureFlashMessage("Failed to add noob point due to connection failure."));
      throw(error);
    });
  };
}

const addAssassinPointLocal = (id) => {
  return {
    type: types.ADD_ASSASSIN_POINT,
    id
  };
};

export function addAssassinPoint(id) {
  return dispatch => {
    dispatch(addAssassinPointLocal(id));
    return noobApi.addAssassinPoint(id).then(
      res => {},
      err => dispatch(addFailureFlashMessage(err.response.data.error))
    ).catch(error => {
      dispatch(addFailureFlashMessage("Failed to add assassin point due to connection failure."));
      throw(error);
    });
  };
}

export function loadNoobSuccess(noob) {
  return {
    type: types.LOAD_NOOB_SUCCESS,
    noob
  };
}

export function loadNoob(id) {
  return dispatch => {
    return noobApi.getNoob(id)
      .then(
        res => dispatch(loadNoobSuccess(res.data)),
        err => dispatch(addFailureFlashMessage(err.response.data.error))
      )
      .catch(error => {
        dispatch(addFailureFlashMessage("Failed to load noob due to connection failure."));
        throw(error);
      });
  };
}
