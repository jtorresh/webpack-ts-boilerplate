import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import HomeConnected from './containers/HomeContainer/HomeConnected';
import './styles.pcss';

render(
  <Provider store={store}>
    <HomeConnected />
  </Provider>
  , document.getElementById('app') as HTMLElement);