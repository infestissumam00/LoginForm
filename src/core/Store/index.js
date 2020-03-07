import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import mainReducer from './mainReducer';

export const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, composeEnhancer(applyMiddleware(...middleware)));

export default store;
