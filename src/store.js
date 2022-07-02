import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";

export default configureStore({
  reducer: reducers,
  middleware: [ReduxPromise, ReduxThunk],
});
