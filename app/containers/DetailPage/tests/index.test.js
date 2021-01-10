/**
 *
 * Tests for DetailPage
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
// import 'jest-dom/extend-expect'; // add some helpful assertions

// eslint-disable-next-line import/named

import Adapter from 'enzyme-adapter-react-16/build';
import Enzyme from 'enzyme';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';
import history from '../../../utils/history';
import App from '../../App';
Enzyme.configure({ adapter: new Adapter() });

let container;
let store;
// let props;
let initialState;
beforeEach(() => {
  container = document.createElement('div');
  initialState = {};
  store = configureStore(initialState, history);
  document.body.appendChild(container);
});
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('<DetailPage />', () => {
  it('should render title', () => {
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>,
        container,
      );
    });
  });
});
