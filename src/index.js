import { Fragment } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
// import { applyMiddleware } from "redux";
// import ReduxPromise from "redux-promise";

import App from "./App";
// import reducers from "./reducers";
import store from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// const storeWithMiddleware = applyMiddleware(ReduxPromise)(store);

root.render(
  <Provider store={store}>
    <Fragment>
      <App />
    </Fragment>
  </Provider>
);
