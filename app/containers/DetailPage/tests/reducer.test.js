// import produce from 'immer';
import { fromJS } from 'immutable';
import produce from 'immer';
import detailPageReducer from '../reducer';
import { LOAD_MOVIE } from '../constants';
import { loadMovieWithId, movieLoaded, movieLoadingError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('detailPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      id: null,
      movie: null,
      movieLink: null,
      movieType: null,
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(detailPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it.skip('should handle the LOAD_MOVIE action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.id = null;
      draft.movieType = null;
      draft.loading = true;
      draft.error = false;
    });
    expect(detailPageReducer(state, loadMovieWithId(null, null))).toEqual(
      expectedResult,
    );
  });

  it('should handle the LOAD_MOVIE_ERROR action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.error = false;
    });
    expect(detailPageReducer(state, movieLoadingError(false))).toEqual(
      expectedResult,
    );
  });

  it('should handle the MOVIE_LOADED action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.movie = null;
      draft.movieLink = null;
    });

    expect(detailPageReducer(state, movieLoaded(null, null))).toEqual(
      expectedResult,
    );
  });

  it('should return the correct movie', () => {
    const id = null;
    const movieType = null;
    const expectedResult = {
      type: LOAD_MOVIE,
      id,
      movieType,
    };
    expect(loadMovieWithId(id, movieType)).toEqual(expectedResult);
  });
});
