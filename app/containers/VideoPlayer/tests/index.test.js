import React from 'react';

import Adapter from 'enzyme-adapter-react-16/build';
import Enzyme from 'enzyme';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../../App';
import history from '../../../utils/history';
import configureStore from '../../../configureStore';
Enzyme.configure({ adapter: new Adapter() });

let store;
let container;
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
describe('Container Login', () => {
  it('render title', () => {
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
