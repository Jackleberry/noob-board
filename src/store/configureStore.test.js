import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const configureStore = (initialState) => {
  const middleware = [thunk, promise];
  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
};

export default configureStore;
