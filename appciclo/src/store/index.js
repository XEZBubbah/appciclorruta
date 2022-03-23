import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk];

import rootReducer from './reducers';

const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
);