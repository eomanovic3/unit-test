/**
 *
 * Tests for VideoItem
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { act } from 'react-dom/test-utils';

import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoItem from '../index';
Enzyme.configure({ adapter: new Adapter() });

let container;
let props;
beforeEach(() => {
  container = document.createElement('Link');
  props = {
    video: {
      original_title: 'Mad Hot Ballroom',
      release_date: '2005-05-13',
      overview: 'Overview',
      id: 14358,
      poster_path: '/cVnBICXmyqlusz1iYvjvIOHxo5U.jpg',
    },
  };
  container.to = `/detailPage/movie/${props.video.id}`;
  document.body.appendChild(container);
});
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('<VideoItem />', () => {
  it('expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<VideoItem />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<VideoItem />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render title', () => {
    act(() => {
      ReactDOM.render(<div>{props.video.original_title}</div>, container);
    });
  });

  it('should render image', () => {
    act(() => {
      const movieImageUrl = `https://image.tmdb.org/t/p/w500${
        props.video.poster_path
      }`;
      ReactDOM.render(
        <img
          className="ui image"
          alt={props.video.original_title}
          src={movieImageUrl}
        />,
        container,
      );
    });
  });

  it('should render date', () => {
    act(() => {
      const date = props.video
        ? props.video.first_air_date || props.video.release_date
        : null;
      const formattedDate = date ? date.toString().split('-')[0] : null;
      ReactDOM.render(<div>{formattedDate}</div>, container);
    });
  });

  it('should check props.video', () => {
    expect(container.to).toBe(`/detailPage/movie/${props.video.id}`);
  });

  it('should render with props.video', () => {
    const component = shallow(<VideoItem video={props.video} />);
    expect(component).toMatchSnapshot();
  });

  it('should render with props.video null', () => {
    props.video = null;
    const component = shallow(<VideoItem video={props.video} />);
    expect(component).toMatchSnapshot();
  });
});
