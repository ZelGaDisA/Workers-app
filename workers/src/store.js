import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import apiReducer from './modules/api/reducer';
import appReducer from './modules/app/reducer';
import apiSaga from './modules/api/saga';

const composeEnhancers = window.compose;

const reducers = combineReducers({
    api: apiReducer,
    app: appReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(apiSaga);

export default store;