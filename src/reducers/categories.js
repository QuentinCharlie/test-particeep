// Action Types
import { UPDATE_CATEGORIES, CHANGE_ACTIVE_CATEGORY } from 'src/actions/movies';

// eslint-disable-next-line import/no-cycle
import initialMovies from 'src/data/movies';

// Initial State
const categories = [];
initialMovies.map((movie) => categories.push(movie.category));
const uniqueCategories = [...new Set(categories)];

const initialState = {
  activeCategory: 'all',
  uniqueCategories,
};

// Reducer
const categoriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CATEGORIES: {
      return {
        ...state,
        uniqueCategories: [
          ...action.updatedCategories,
        ],
      };
    }

    case CHANGE_ACTIVE_CATEGORY: {
      if (state.activeCategory === action.category) {
        return {
          ...state,
          activeCategory: 'all',
        };
      }
      return {
        ...state,
        activeCategory: action.category,
      };
    }


    default:
      return state;
  }
};

export default categoriesReducer;
