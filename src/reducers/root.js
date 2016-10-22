import { combineReducers } from 'redux';
import visibleNoob from './Noob';
import noobs from './Noobs';
import visibilityFilter from './VisibilityFilter';
import flashMessages from './flashMessages';
import auth from './auth';

export default combineReducers({
  visibleNoob,
  noobs,
  visibilityFilter,
  flashMessages,
  auth
});
