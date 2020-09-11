import { createStore, applyMiddleware } from 'redux';

export default (reducers, middewares) => {
    const enhancer = applyMiddleware(...middewares)
    return createStore(reducers, enhancer)
};