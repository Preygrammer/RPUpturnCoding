import { combineReducers } from "redux";
import problemReducers from "./problemReducers";

const rootReducer = combineReducers({
  contents: [],
  problems: problemReducers
});

export default rootReducer;
