import { DEFAULT_ACTION } from '../constants';
import { defaultAction } from '../actions';

describe('App Actions', () => {
  describe('defaultAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: DEFAULT_ACTION,
      };

      expect(defaultAction()).toEqual(expectedResult);
    });
  });
});
