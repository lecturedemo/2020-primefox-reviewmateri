import { createStore, combineReducers, applyMiddleware } from "redux";
import { taksReducer } from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const reducers = combineReducers({ taksReducer });

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
