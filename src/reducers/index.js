import { combineReducers } from 'redux';

import moviesReducer from './movies';
import likesReducer from './likes';

const rootReducer = combineReducers({
  movies: moviesReducer,
  likes: likesReducer,
  // ... autres reducers
});

export default rootReducer;
