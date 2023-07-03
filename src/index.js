// import necessary dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor} from "./store/store";
import App from "./components/App";

// sets up the root element for rendering your React application and renders the application inside it
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider> is used to provide the Redux store to the application
  <Provider store={store}>
    {/* <PersistGate> component is used to handle the persisting and rehydrating of the store. */}
    {/* loading prop is set to null, meaning no loading indicator is displayed while the store is being rehydrated. */}
    <PersistGate loading={null} persistor={persistor}>
      {/* <App> component is rendered. This is the root component of our application. */}
      <App />
    </PersistGate>
  </Provider>
);
