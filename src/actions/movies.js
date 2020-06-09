// Types
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const CHANGE_LIKE_STATUS = 'CHANGE_LIKE_STATUS';

// Creators
export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  id,
});

export const changeLikeStatus = (id) => ({
  type: CHANGE_LIKE_STATUS,
  id,
});
