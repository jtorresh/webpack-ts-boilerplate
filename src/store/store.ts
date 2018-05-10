import { createStore, applyMiddleware, Store, Middleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { IState } from '../types/IState';
import { testReducer } from '../reducers/testReducer';

export const initialState: IState = {
  text: 'Hello world!',
  change: false
}

const sagaMiddleware = createSagaMiddleware();

const middlewares: Array<any> = [sagaMiddleware];

 if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
 }  

export const store: Store<IState> = createStore(
  testReducer,
  applyMiddleware(...middlewares)
);