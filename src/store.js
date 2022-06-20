import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import ReduxPromise from "redux-promise";


export default configureStore({
  reducer: reducers,
  middleware: [ReduxPromise]
});
