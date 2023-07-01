import { combineReducers } from "redux";
import productReducer from "./productReducers";
import sortReducer from "./sortReducers";

const rootReducer = combineReducers({
  products: productReducer,
  sort: sortReducer,
});

export default rootReducer;
