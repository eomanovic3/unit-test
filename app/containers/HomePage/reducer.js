/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_TERM,
  LOAD_MOVIES_ERROR,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  popularMovies: null,
  popularTvShows: null,
  familyShows: null,
  documentaryMovies: null,
  allMovies: null,
  selectedVideo: null,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return state.set('loading', true).set('error', false);
    case LOAD_MOVIES_SUCCESS:
      return state
        .set('loading', false)
        .set('allMovies', action.allMovies)
        .set('familyShows', action.familyShows)
        .set('documentaryMovies', action.documentaryMovies)
        .set('popularTvShows', action.popularTvShows)
        .set('popularMovies', action.popularMovies);
    case LOAD_MOVIES_ERROR:
      return state.set('error', action.error).set('loading', false);
    case CHANGE_TERM:
      // eslint-disable-next-line no-case-declarations
      const allMovies = state
        .get('allMovies')
        .filter(c =>
          c.original_title.toLowerCase().includes(action.term.toLowerCase()),
        );
      return state.set('allMovies', allMovies);
    default:
      return state;
  }
}

export default homePageReducer;
