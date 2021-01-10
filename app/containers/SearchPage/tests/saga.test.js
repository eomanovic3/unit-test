import { testSaga } from 'redux-saga-test-plan';
import searchPageSaga, { getMoviesUsingTerm } from '../saga';

describe('movies fetching flow', () => {
  it('Fetches the movies with error', () => {
    const generator = getMoviesUsingTerm({
      type: 'app/SearchPage/LOAD_SEARCH_MOVIES',
    });
    generator.next();
    generator.next();
    const val2 = generator.next();
    const val3 = val2.value.payload.action.type;
    expect(val3).toEqual('app/SearchPage/SEARCH_SUCCESS');
  });

  it('test redux-saga-test-plan', () => {
    const saga = testSaga(searchPageSaga);
    saga
      .next()
      .takeLatest('app/SearchPage/LOAD_SEARCH_MOVIES', getMoviesUsingTerm)
      .finish(); // don't forget to test that your saga finished when expected
  });
});
