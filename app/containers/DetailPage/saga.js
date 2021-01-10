import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { LOAD_MOVIE } from './constants';
import { movieLoaded, movieLoadingError } from './actions';

export function* getMovieWithId(data) {
  try {
    let movieOrTVshow = null;
    let movieLink = null;

    if (data.movieType === 'tv') {
      movieOrTVshow = yield call(
        request,
        `https://api.themoviedb.org/3/tv/${
          data.id
        }?api_key=a8ff50b145b3742d52ef2fc9ce52264f`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      movieLink = yield call(
        request,
        `https://api.themoviedb.org/3/tv/${
          data.id
        }/videos?api_key=a8ff50b145b3742d52ef2fc9ce52264f`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    } else {
      // Check if it is movie
      movieOrTVshow = yield call(
        request,
        `https://api.themoviedb.org/3/movie/${
          data.id
        }?api_key=a8ff50b145b3742d52ef2fc9ce52264f`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      movieLink = yield call(
        request,
        `https://api.themoviedb.org/3/movie/${
          data.id
        }/videos?api_key=a8ff50b145b3742d52ef2fc9ce52264f`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }
    const movieLinkKey =
      movieLink.results && movieLink.results.length > 0
        ? movieLink.results[0].key
        : '';
    yield put(
      movieLoaded(
        movieOrTVshow,
        `https://www.youtube.com/watch?v=${movieLinkKey}`,
      ),
    );
  } catch (err) {
    yield put(movieLoadingError(err));
  }
}

// Individual exports for testing
export default function* detailPageSaga() {
  yield takeLatest(LOAD_MOVIE, getMovieWithId);
}
