// import necessary dependencies
import { legacy_createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import rootReducer from "../reducers/reducers";

// defines the configuration object for Redux persist
const persistConfig = {
  
  // specifies the key as "root" to indicate the root of the store state
  key: "root",

  // "storage" is set to storage, which uses localStorage by default for web applications
  storage,

  // "whiteList" array specifies the reducers that should be persisted
  whiteList: ["products", "cart"],
};

// creates a persisted reducer by wrapping the rootReducer with the persistReducer(),
const persistedReducer = persistReducer(persistConfig, rootReducer);

// creates the Redux store
export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));

// creates the persistor
export const persistor = persistStore(store);
