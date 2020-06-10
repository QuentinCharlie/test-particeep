// Action Types
import {
  DELETE_MOVIE,
  FILTER_BY_CATEGORY,
  CHANGE_ACTIVE_PAGE,
  CHANGE_MOVIES_PER_PAGE,
  SET_BACKGROUND_POSTER,
  REMOVE_BACKGROUND_POSTER,
} from 'src/actions/movies';

import movies from 'src/data/movies';
// Initial State
const initialState = {
  movies,
  filteredMovies: [],
  activePage: 1,
  moviesPerPage: 4,
  posterBackground: 'none',
};


// Reducer
const moviesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DELETE_MOVIE: {
      const remainingMovies = state.movies.filter((movie) => movie.id !== action.id);
      const filteredMovies = state.filteredMovies.filter((movie) => movie.id !== action.id);
      return {
        ...state,
        movies: [
          ...remainingMovies,
        ],
        filteredMovies: [
          ...filteredMovies,
        ],
      };
    }

    case FILTER_BY_CATEGORY: {
      if (action.category.length > 0) {
        // eslint-disable-next-line max-len
        const filteredByCategory = state.movies.filter((movie) => action.category.includes(movie.category));
        return {
          ...state,
          filteredMovies: [
            ...filteredByCategory,
          ],
        };
      }
      return {
        ...state,
        filteredMovies: [
          ...state.movies,
        ],
      };
    }

    case CHANGE_ACTIVE_PAGE: {
      return {
        ...state,
        activePage: action.page,
      };
    }

    case CHANGE_MOVIES_PER_PAGE: {
      return {
        ...state,
        moviesPerPage: action.number,
      };
    }

    case SET_BACKGROUND_POSTER: {
      return {
        ...state,
        posterBackground: action.poster,
      };
    }

    case REMOVE_BACKGROUND_POSTER: {
      return {
        ...state,
        posterBackground: 'none',
      };
    }

    default:
      return state;
  }
};

export default moviesReducer;
