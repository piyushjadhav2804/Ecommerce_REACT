import { combineReducers } from "redux";
import productReducer from "./productReducers";
import sortReducer from "./sortReducers";
import cartReducer from "./cartReducers";

const rootReducer = combineReducers({
  products: productReducer,
  sort: sortReducer,
  cart: cartReducer,
});

export default rootReducer;
