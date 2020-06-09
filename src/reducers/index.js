import { combineReducers } from 'redux';

import moviesReducer from './movies';
import likesReducer from './likes';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  movies: moviesReducer,
  likes: likesReducer,
  categories: categoriesReducer,
  // ... autres reducers
});

export default rootReducer;
