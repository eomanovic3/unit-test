import {
  changeTerm,
  loadMovies,
  moviesLoaded,
  moviesLoadingError,
} from '../actions';
import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_ERROR,
  CHANGE_TERM,
} from '../constants';
describe('HomePage actions', () => {
  describe('LOAD_MOVIES', () => {
    it('should return the correct type', () => {
      const expected = {
        type: LOAD_MOVIES,
      };
      expect(loadMovies()).toEqual(expected);
    });
  });

  describe('LOAD_MOVIES_SUCCESS', () => {
    it('should return the correct type', () => {
      const movies = {
        popularMovies: [
          {
            id: 475557,
            original_title: 'Joker',
            overview: 'overview',
            poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
            release_date: '2019-10-02',
            vote_average: '8.8',
          },
        ],
        popularTvShows: [
          {
            id: 475557,
            original_title: 'Joker',
            overview: 'overview',
            poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
            release_date: '2019-10-02',
            vote_average: '8.8',
          },
        ],
        familyShows: [
          {
            id: 475557,
            original_title: 'Joker',
            overview: 'overview',
            poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
            release_date: '2019-10-02',
            vote_average: '8.8',
          },
        ],
        documentaryMovies: [
          {
            id: 475557,
            original_title: 'Joker',
            overview: 'overview',
            poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
            release_date: '2019-10-02',
            vote_average: '8.8',
          },
        ],
        allMovies: [
          {
            id: 475557,
            original_title: 'Joker',
            overview: 'overview',
            poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
            release_date: '2019-10-02',
            vote_average: '8.8',
          },
        ],
      };
      const {
        popularMovies,
        popularTvShows,
        familyShows,
        documentaryMovies,
        allMovies,
      } = movies;
      const expectedResult = {
        type: LOAD_MOVIES_SUCCESS,
        popularMovies,
        popularTvShows,
        familyShows,
        documentaryMovies,
        allMovies,
      };

      expect(
        moviesLoaded(
          popularMovies,
          popularTvShows,
          familyShows,
          documentaryMovies,
          allMovies,
        ),
      ).toEqual(expectedResult);
    });
  });

  describe('LOAD_MOVIE_ERROR', () => {
    it('should return the correct type', () => {
      const error = '9090';
      const expectedResult = {
        type: LOAD_MOVIES_ERROR,
        error,
      };

      expect(moviesLoadingError(error)).toEqual(expectedResult);
    });
  });

  describe('CHANGE_TERM', () => {
    it('should return the correct type', () => {
      const term = '9090';
      const expectedResult = {
        type: CHANGE_TERM,
        term,
      };

      expect(changeTerm(term)).toEqual(expectedResult);
    });
  });
});
