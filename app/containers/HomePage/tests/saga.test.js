import { testSaga } from 'redux-saga-test-plan';
import homePageSaga, { getMovies } from '../saga';

describe('movies fetching flow', () => {
  it('Fetches the movies with error', () => {
    const generator = getMovies();
    generator.next();
    expect(generator.next().value.payload.action.type).toEqual(
      'app/HomePage/LOAD_MOVIES_ERROR',
    );
  });
  it('Test getMovies generator', () => {
    const saga = testSaga(homePageSaga);
    saga
      .next()
      .takeLatest('app/HomePage/LOAD_MOVIES', getMovies)
      .finish();
  });
});
