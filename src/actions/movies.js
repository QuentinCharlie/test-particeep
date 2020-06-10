// Types
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const CHANGE_LIKE_STATUS = 'CHANGE_LIKE_STATUS';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const CHANGE_ACTIVE_CATEGORY = 'CHANGE_ACTIVE_CATEGORY';
export const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';
export const CHANGE_MOVIES_PER_PAGE = 'CHANGE_MOVIES_PER_PAGE';
export const SET_BACKGROUND_POSTER = 'SET_BACKGROUND_POSTER';
export const REMOVE_BACKGROUND_POSTER = 'REMOVE_BACKGROUND_POSTER';

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

export const filterByCategory = (category) => ({
  type: FILTER_BY_CATEGORY,
  category,
});

export const changeActiveCategories = (category) => ({
  type: CHANGE_ACTIVE_CATEGORY,
  category,
});

export const changeActivePage = (page) => ({
  type: CHANGE_ACTIVE_PAGE,
  page,
});

export const changeMoviesPerPage = (number) => ({
  type: CHANGE_MOVIES_PER_PAGE,
  number,
});

export const setBackgroundPoster = (poster) => ({
  type: SET_BACKGROUND_POSTER,
  poster,
});

export const removeBackgroundPoster = () => ({
  type: REMOVE_BACKGROUND_POSTER,
});
