// import necessary dependencies
import { combineReducers } from "redux";
import productReducer from "./productReducers";
import sortReducer from "./sortReducers";
import cartReducer from "./cartReducers";

// uses the combineReducers function to combine the individual reducer functions into a single root reducer
const rootReducer = combineReducers({
  products: productReducer,
  sort: sortReducer,
  cart: cartReducer,
});

export default rootReducer;
