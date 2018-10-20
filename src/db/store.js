import {createStore, compose, combineReducers} from "redux";

import reducers from "./reducers";

// Redux devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
export default createStore(combineReducers(reducers), composeEnhancers());
