import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the SearchPage state domain
 */

const selectSearchPageDomain = state => state.searchPage || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectSearchPageDomain,
    searchPage => searchPage.get('loading'),
  );

const makeSelectError = () =>
  createSelector(
    selectSearchPageDomain,
    searchPage => searchPage.get('error'),
  );

const makeSelectTerm = () =>
  createSelector(
    selectSearchPageDomain,
    searchPage => searchPage.get('term'),
  );

const makeSelectMovies = () =>
  createSelector(
    selectSearchPageDomain,
    searchPage => searchPage.get('movies'),
  );
export {
  selectSearchPageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectTerm,
  makeSelectMovies,
};
