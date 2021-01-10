import { testSaga } from 'redux-saga-test-plan';
import detailPageSaga, { getMovieWithId } from '../saga';

describe('movies fetching flow', () => {
  it('should fetch the movies with error', () => {
    const generator = getMovieWithId({
      type: 'app/DetailPage/LOAD_MOVIE',
      id: '1416',
      movieType: 'tv',
    });
    generator.next();
    generator.next();
    expect(generator.next().value.payload.action.type).toEqual(
      'app/DetailPage/LOAD_MOVIE_ERROR',
    );
  });

  it('should test getMovieWithId generator', () => {
    const saga = testSaga(detailPageSaga);
    saga
      .next()
      .takeLatest('app/DetailPage/LOAD_MOVIE', getMovieWithId)
      .finish(); // don't forget to test that your saga finished when expected
  });
});
