import { testSaga } from 'redux-saga-test-plan';
import videoPlayerSaga, { getMovieWithId } from '../saga';

describe('movies fetching flow', () => {
  it('Fetches the movies with error', () => {
    const generator = getMovieWithId({
      type: 'app/VideoPlayer/LOAD_MOVIE',
      id: '1416',
    });
    generator.next();
    generator.next();
    expect(generator.next().value.payload.action.type).toEqual(
      'app/VideoPlayer/LOAD_MOVIE_ERROR',
    );
  });
  it('Test getMovieWithId generator', () => {
    const saga = testSaga(videoPlayerSaga);
    saga
      .next()
      .takeLatest('app/VideoPlayer/LOAD_MOVIE', getMovieWithId)
      .finish();
  });
});
