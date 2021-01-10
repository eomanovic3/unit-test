/**
 *
 * Tests for SearchPage
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { shallow } from 'enzyme';
// import 'jest-dom/extend-expect'; // add some helpful assertions

// eslint-disable-next-line import/named
import { SearchPage } from '../index';

function mockItem(overrides) {
  // … create mock ToDo Item
  return <VideoItem ></VideoItem>
}

describe('<SearchPage />', () => {
  it('Expect to have additional unit tests specified', () => {
    expect(false).toEqual(false);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<SearchPage />);
    expect(firstChild).toMatchSnapshot();
  });

  it('renders the title', () => {
    const item = mockItem();
    const wrapper = shallow(<VideoItem item={item} />);
    expect(wrapper.text()).to.contain(item.title);
  });
});
