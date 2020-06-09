import { combineReducers } from 'redux';

import moviesReducer from './movies';

const rootReducer = combineReducers({
  movies: moviesReducer,
  // ... autres reducers
});

export default rootReducer;
