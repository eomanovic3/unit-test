import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectVideoPlayerDomain = state => state.videoPlayer || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectVideoPlayerDomain,
    videoPlayer => videoPlayer.get('loading'),
  );

const makeSelectError = () =>
  createSelector(
    selectVideoPlayerDomain,
    videoPlayer => videoPlayer.get('error'),
  );

const makeSelectMovie = () =>
  createSelector(
    selectVideoPlayerDomain,
    videoPlayer => videoPlayer.get('movie'),
  );

const makeSelectId = () =>
  createSelector(
    selectVideoPlayerDomain,
    videoPlayer => videoPlayer.get('id'),
  );

const makeSelectMovieLink = () =>
  createSelector(
    selectVideoPlayerDomain,
    videoPlayer => videoPlayer.get('movieLink'),
  );
export {
  selectVideoPlayerDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectMovie,
  makeSelectId,
  makeSelectMovieLink,
};
