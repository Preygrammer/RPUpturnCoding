import { combineReducers } from "redux";
import ProblemReducers from "./problemReducers";

const rootReducer = combineReducers({
  problems: ProblemReducers
});

export default rootReducer;
