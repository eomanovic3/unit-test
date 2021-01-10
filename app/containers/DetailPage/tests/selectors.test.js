import { fromJS } from 'immutable';
import {
  makeSelectError,
  makeSelectId,
  makeSelectLoading,
  makeSelectMovie,
  makeSelectMovieLink,
  makeSelectMovieType,
  selectDetailPageDomain,
} from '../selectors';

describe('selectVideoPlayerDomain', () => {
  it('should select the global state', () => {
    const globalState = fromJS({
      loading: false,
      error: false,
      id: null,
      movie: null,
      movieLink: null,
      movieType: null,
    });
    const mockedState = {
      global: globalState,
    };
    expect(selectDetailPageDomain(mockedState)).toEqual(globalState);
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

describe('makeSelectMovie', () => {
  const movieSelector = makeSelectMovie();
  it('should select the movie', () => {
    const movie = null;
    const mockedState = {
      global: {
        movie,
      },
    };
    expect(movieSelector(mockedState)).toEqual(movie);
  });
});

describe('makeSelectMovieLink', () => {
  const movieLinkSelector = makeSelectMovieLink();
  it('should select the movie link', () => {
    const movieLink = null;
    const mockedState = {
      global: {
        movieLink,
      },
    };
    expect(movieLinkSelector(mockedState)).toEqual(movieLink);
  });
});

describe('makeSelectMovieType', () => {
  const movieLinkSelector = makeSelectMovieType();
  it('should select the movie type', () => {
    const movieType = null;
    const mockedState = {
      global: {
        movieType,
      },
    };
    expect(movieLinkSelector(mockedState)).toEqual(movieType);
  });
});

describe('makeSelectId', () => {
  const idSelector = makeSelectId();
  it('should select the id', () => {
    const id = null;
    const mockedState = {
      global: {
        id,
      },
    };
    expect(idSelector(mockedState)).toEqual(id);
  });
});
