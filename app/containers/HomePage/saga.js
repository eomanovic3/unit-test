import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from '../../utils/request';
import { moviesLoaded, moviesLoadingError } from './actions';
import { LOAD_MOVIES } from './constants';

export function* getMovies() {
  try {
    const [
      popularMovies,
      popularTvShows,
      familyShows,
      documentaryMovies,
      allMovies,
    ] = yield all([
      call(
        request,
        'https://api.themoviedb.org/3/movie/popular?api_key=a8ff50b145b3742d52ef2fc9ce52264f',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ),
      call(
        request,
        'https://api.themoviedb.org/3/tv/popular?api_key=a8ff50b145b3742d52ef2fc9ce52264f',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ),
      call(
        request,
        'https://api.themoviedb.org/3/discover/movie?api_key=a8ff50b145b3742d52ef2fc9ce52264f&with_genres=10751',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ),
      call(
        request,
        'https://api.themoviedb.org/3/discover/movie?api_key=a8ff50b145b3742d52ef2fc9ce52264f&with_genres=99',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ),
      call(
        request,
        'https://api.themoviedb.org/3/discover/movie?api_key=a8ff50b145b3742d52ef2fc9ce52264f',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ),
    ]);

    yield put(
      moviesLoaded(
        popularMovies,
        popularTvShows,
        familyShows,
        documentaryMovies,
        allMovies,
      ),
    );
  } catch (err) {
    yield put(moviesLoadingError(err));
  }
}

export default function* homePageSaga() {
  yield takeLatest(LOAD_MOVIES, getMovies);
}
