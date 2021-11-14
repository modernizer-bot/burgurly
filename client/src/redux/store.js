import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { rootReducer } from './rootReducer.js';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga.js'
const sagaMiddleware=createSagaMiddleware();
const middlewares=[ReduxThunk,sagaMiddleware,logger];
const store=createStore(rootReducer,applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga)
export default store;