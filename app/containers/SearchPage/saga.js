import { takeLatest, call, put, select } from 'redux-saga/effects';

import { LOAD_SEARCH_MOVIES } from './constants';
import request from '../../utils/request';
import { searchMoviesLoaded } from './actions';
import { makeSelectTerm } from './selectors';

export function* getMoviesUsingTerm() {
  const term = yield select(makeSelectTerm());
  const queryTerm = term !== '' ? `&query=${term}` : "&query=''";
  const fullMovies = yield call(
    request,
    `https://api.themoviedb.org/3/search/multi?api_key=a8ff50b145b3742d52ef2fc9ce52264f&page=1&include_adult=false${queryTerm}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  yield put(searchMoviesLoaded(fullMovies));
}

// Individual exports for testing
export default function* searchPageSaga() {
  yield takeLatest(LOAD_SEARCH_MOVIES, getMoviesUsingTerm);
}
