import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { movieLoaded, movieLoadingError } from './actions';
import { LOAD_MOVIE } from './constants';

export function* getMovieWithId(id) {
  try {
    const movie = yield call(
      request,
      `https://api.themoviedb.org/3/movie/${
        id.id
      }?api_key=a8ff50b145b3742d52ef2fc9ce52264f`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const movieLink = yield call(
      request,
      `https://api.themoviedb.org/3/movie/${
        id.id
      }/videos?api_key=a8ff50b145b3742d52ef2fc9ce52264f`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const movieLinkKey = movieLink.results[0].key;
    yield put(
      movieLoaded(movie, `https://www.youtube.com/watch?v=${movieLinkKey}`),
    );
  } catch (err) {
    yield put(movieLoadingError(err));
  }
}
// Individual exports for testing
export default function* videoPlayerSaga() {
  yield takeLatest(LOAD_MOVIE, getMovieWithId);
}
