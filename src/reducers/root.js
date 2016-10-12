import { combineReducers } from 'redux';
import visibleNoob from './Noob';
import noobs from './Noobs';
import visibilityFilter from './VisibilityFilter';
import flashMessages from './flashMessages';

export default combineReducers({
  visibleNoob,
  noobs,
  visibilityFilter,
  flashMessages
});
