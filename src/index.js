import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import App from "./App";
import reducers from "./reducers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

root.render(
  <Provider store={storeWithMiddleware(reducers)}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
