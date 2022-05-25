/*리덕스모듈*/
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger'
import {applyMiddleware, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createWrapper} from "next-redux-wrapper";
import rootReducer from "../reducer";
import rootSagas from "../sagas";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware, logger];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middleware))
        : composeWithDevTools(applyMiddleware(...middleware));

    const store = createStore(rootReducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSagas);
    return store;
}

const wrapper = createWrapper(configureStore, {debug: process.env.NODE_ENV === 'development'});

export default wrapper;