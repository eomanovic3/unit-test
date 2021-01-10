/*
 *
 * VideoPlayer reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_MOVIE, LOAD_MOVIE_ERROR, MOVIE_LOADED } from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  id: null,
  movie: null,
  movieLink: null,
});

function videoPlayerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('id', action.id);
    case LOAD_MOVIE_ERROR:
      return state.set('error', action.error).set('loading', false);
    case MOVIE_LOADED:
      return state
        .set('movie', action.movie)
        .set('movieLink', action.movieLink)
        .set('loading', false)
        .set('error', false);
    default:
      return state;
  }
}

export default videoPlayerReducer;
