// Action Types
import { DO_SOMETHING } from 'src/actions/movies';

import movies from 'src/data/movies';
// Initial State
const initialState = movies;

// Reducer
const moviesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

export default moviesReducer;
