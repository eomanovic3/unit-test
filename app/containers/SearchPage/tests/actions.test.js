import {
  CHANGE_SEARCH_TERM,
  LOAD_SEARCH_MOVIES,
  SEARCH_SUCCESS,
} from '../constants';
import {
  changeSearchTerm,
  loadSearchMovies,
  searchMoviesLoaded,
} from '../actions';

describe('CHANGE_SEARCH_TERM actions', () => {
  describe('CHANGE_SEARCH_TERM', () => {
    it('should return the correct movie', () => {
      const term = 'Fenix';
      const expectedResult = {
        type: CHANGE_SEARCH_TERM,
        term,
      };

      expect(changeSearchTerm(term)).toEqual(expectedResult);
    });
  });

  describe('loadSearchMovies', () => {
    it('should return the correct movie loadSearchMovies', () => {
      const expectedResult = {
        type: LOAD_SEARCH_MOVIES,
      };

      expect(loadSearchMovies()).toEqual(expectedResult);
    });
  });

  describe('SEARCH_SUCCESS', () => {
    it('should return the SEARCH_SUCCESS', () => {
      const movies = [
        {
          id: 475557,
          original_title: 'Joker',
          overview: 'overview',
          poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
          release_date: '2019-10-02',
          vote_average: '8.8',
        },
        {
          id: 475558,
          original_title: 'Try',
          overview: 'overview',
          poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
          release_date: '2019-10-02',
          vote_average: '8.8',
        },
      ];
      const expectedResult = {
        type: SEARCH_SUCCESS,
        movies,
      };

      expect(searchMoviesLoaded(movies)).toEqual(expectedResult);
    });
  });
});
