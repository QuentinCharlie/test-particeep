// Action Types
import { DELETE_MOVIE } from 'src/actions/movies';

import movies from 'src/data/movies';
// Initial State
const initialState = movies;

// Reducer
const moviesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DELETE_MOVIE: {
      const filteredMovies = state.filter((movie) => movie.id !== action.id);
      console.log(filteredMovies);
      return [
        ...filteredMovies,
      ];
    }

    default:
      return state;
  }
};

export default moviesReducer;
