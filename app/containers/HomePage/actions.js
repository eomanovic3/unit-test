/*
 *
 * HomePage actions
 *
 */

import {
  CHANGE_TERM,
  LOAD_MOVIES,
  LOAD_MOVIES_ERROR,
  LOAD_MOVIES_SUCCESS,
} from './constants';

export function loadMovies() {
  return {
    type: LOAD_MOVIES,
  };
}

export function moviesLoaded(
  popularMovies,
  popularTvShows,
  familyShows,
  documentaryMovies,
  allMovies,
) {
  return {
    type: LOAD_MOVIES_SUCCESS,
    popularMovies,
    popularTvShows,
    familyShows,
    documentaryMovies,
    allMovies,
  };
}

export function moviesLoadingError(error) {
  return {
    type: LOAD_MOVIES_ERROR,
    error,
  };
}

export function changeTerm(term) {
  return {
    type: CHANGE_TERM,
    term,
  };
}
