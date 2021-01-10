/*
 *
 * VideoPlayer actions
 *
 */

import { LOAD_MOVIE, LOAD_MOVIE_ERROR, MOVIE_LOADED } from './constants';

export function loadMovieWithId(id) {
  return {
    type: LOAD_MOVIE,
    id,
  };
}

export function movieLoaded(movie, movieLink) {
  return {
    type: MOVIE_LOADED,
    movie,
    movieLink,
  };
}

export function movieLoadingError(error) {
  return {
    type: LOAD_MOVIE_ERROR,
    error,
  };
}
