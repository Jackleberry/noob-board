import * as types from './actionTypes';
import noobApi from '../api/noobApi';
import { addFailureFlashMessage } from './flashMessages';

export function loadNoobsSuccess(noobs) {
  return {
    type: types.LOAD_NOOBS_SUCCESS,
    noobs
  };
}

export function loadNoobs() {
  return dispatch => {
    return noobApi.getAllNoobs().then(
      res => dispatch(loadNoobsSuccess(res.data)),
      err => dispatch(addFailureFlashMessage(err.response.data.error))
    ).catch(error => {
      dispatchFailureMessage("Failed to load noob due to connection failure.");
      throw(error);
    });
  };
}


