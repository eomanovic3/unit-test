/*
 *
 * SearchPage actions
 *
 */

import {
  CHANGE_SEARCH_TERM,
  LOAD_SEARCH_MOVIES,
  SEARCH_SUCCESS,
} from './constants';

export function changeSearchTerm(term) {
  return {
    type: CHANGE_SEARCH_TERM,
    term,
  };
}

export function loadSearchMovies() {
  return {
    type: LOAD_SEARCH_MOVIES,
  };
}

export function searchMoviesLoaded(movies) {
  return {
    type: SEARCH_SUCCESS,
    movies,
  };
}
