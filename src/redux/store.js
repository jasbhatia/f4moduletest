import { applyMiddleware, createStore } from "redux";
import productReducer from "../reducer/productReducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  product: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
