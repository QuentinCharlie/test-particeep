// Types
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const CHANGE_LIKE_STATUS = 'CHANGE_LIKE_STATUS';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';

// Creators
export const deleteMovie = (id, category) => ({
  type: DELETE_MOVIE,
  id,
  category,
});

export const changeLikeStatus = (id) => ({
  type: CHANGE_LIKE_STATUS,
  id,
});

export const updateCategories = (updatedCategories) => ({
  type: UPDATE_CATEGORIES,
  updatedCategories,
});
