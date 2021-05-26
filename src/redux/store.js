import { combineReducers, createStore } from "redux";
import dataReducer from "./data-reducer";

let reducers = combineReducers({ dataReducer });

const store = createStore(reducers);
export default store;
