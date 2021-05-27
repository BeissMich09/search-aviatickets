import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import dataReducer from "./data-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({ dataReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
// @ts-ignore
window.__store__ = store;
export default store;
