/*
 *
 * searchPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_SEARCH_TERM,
  LOAD_SEARCH_MOVIES,
  SEARCH_SUCCESS,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  term: '',
  movies: null,
});

function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SEARCH_MOVIES:
      return state.set('loading', true).set('error', false);
    case CHANGE_SEARCH_TERM:
      return state.set('term', action.term);
    case SEARCH_SUCCESS:
      return state
        .set('movies', action.movies)
        .set('loading', false)
        .set('error', false);
    default:
      return state;
  }
}

export default searchPageReducer;
