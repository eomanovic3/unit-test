/**
 *
 * Tests for VideoList
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoList from '../index';

Enzyme.configure({ adapter: new Adapter() });

let container;
let props;
beforeEach(() => {
  container = document.createElement('div');
  props = {
    videos: {
      results: [
        {
          original_title: 'Mad Hot Ballroom',
          release_date: '2005-05-13',
          overview: 'Overview',
          id: 14358,
          poster_path: '/cVnBICXmyqlusz1iYvjvIOHxo5U.jpg',
        },
        {
          original_title: 'To Wong Foo, Thanks for Everything! Julie Newmar',
          release_date: '1995-09-07',
          overview: 'Overview',
          id: 9090,
          poster_path: '/xIDEoG9FQGmMCh5XsbkvSuD8WrW.jpg',
        },
      ],
    },
  };
  document.body.appendChild(container);
});
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('<VideoList />', () => {
  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<VideoList />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<VideoList />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render with videos', () => {
    const component = shallow(<VideoList videos={props.videos} />);
    expect(component).toMatchSnapshot();
  });
});
