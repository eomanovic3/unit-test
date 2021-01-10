import { fromJS } from 'immutable';
import {
  selectSearchPageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectTerm,
  makeSelectMovies,
} from '../selectors';

describe('selectSearchPageDomain', () => {
  it('should select the global state', () => {
    const globalState = fromJS({
      loading: false,
      error: false,
      term: '',
      movies: null,
    });
    const mockedState = {
      global: globalState,
    };
    expect(selectSearchPageDomain(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = false;
    const mockedState = {
      global: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectMovies', () => {
  const moviesSelector = makeSelectMovies();
  it('should select the error', () => {
    const movies = null;
    const mockedState = {
      global: {
        movies,
      },
    };
    expect(moviesSelector(mockedState)).toEqual(movies);
  });
});

describe('makeSelectTerm', () => {
  const termSelector = makeSelectTerm();
  it('should select the error', () => {
    const term = '';
    const mockedState = {
      global: {
        term,
      },
    };
    expect(termSelector(mockedState)).toEqual(term);
  });
});
