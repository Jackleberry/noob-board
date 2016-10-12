import * as types from './actionTypes';
import noobApi from '../api/noobApi';

export function loadNoobsSuccess(noobs) {
  return {
    type: types.LOAD_NOOBS_SUCCESS,
    noobs
  };
}

export function loadNoobs() {
  return dispatch => {
    return noobApi.getAllNoobs()
      .then(noobs => {
        dispatch(loadNoobsSuccess(noobs));
      })
      .catch(error => {
        throw(error);
      });
  };
}


