import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the detailPage state domain
 */

const selectDetailPageDomain = state => state.detailPage || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectDetailPageDomain,
    detailPage => detailPage.get('loading'),
  );

const makeSelectError = () =>
  createSelector(
    selectDetailPageDomain,
    detailPage => detailPage.get('error'),
  );

const makeSelectMovie = () =>
  createSelector(
    selectDetailPageDomain,
    detailPage => detailPage.get('movie'),
  );

const makeSelectId = () =>
  createSelector(
    selectDetailPageDomain,
    detailPage => detailPage.get('id'),
  );

const makeSelectMovieLink = () =>
  createSelector(
    selectDetailPageDomain,
    detailPage => detailPage.get('movieLink'),
  );

const makeSelectMovieType = () =>
  createSelector(
    selectDetailPageDomain,
    detailPage => detailPage.get('movieType'),
  );

export {
  selectDetailPageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectMovie,
  makeSelectId,
  makeSelectMovieLink,
  makeSelectMovieType,
};
