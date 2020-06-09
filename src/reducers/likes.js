// Action Types
import { CHANGE_LIKE_STATUS } from 'src/actions/movies';

// Initial State
const initialState = {
};

// Reducer
const likesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LIKE_STATUS: {
      let liked;

      if (state[action.id] === undefined) {
        liked = true;
      }
      else {
        liked = !state[action.id];
      }

      return {
        ...state,
        [action.id]: liked,
      };
    }

    default:
      return state;
  }
};

export default likesReducer;
