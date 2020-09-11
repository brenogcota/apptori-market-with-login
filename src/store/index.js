import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const SagaMiddleware = createSagaMiddleware();

const middlewares = [SagaMiddleware];

const store = createStore(rootReducer, middlewares)

SagaMiddleware.run(rootSaga);

export default store;