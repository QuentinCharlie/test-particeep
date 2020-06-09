// Action Types
import { UPDATE_CATEGORIES } from 'src/actions/movies';

// eslint-disable-next-line import/no-cycle
import initialMovies from 'src/data/movies';

// Initial State
const categories = [];
initialMovies.map((movie) => categories.push(movie.category));
const uniqueCategories = [...new Set(categories)];

const initialState = uniqueCategories;

// Reducer
const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CATEGORIES: {

      return [
        ...action.updatedCategories,
      ];
    }

    default:
      return state;
  }
};

export default categoriesReducer;
