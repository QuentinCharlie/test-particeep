// Types
export const DELETE_MOVIE = 'DELETE_MOVIE';

// Creators
export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  id,
});
