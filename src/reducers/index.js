import { combineReducers } from "redux";
import ProblemReducers, { submitCode } from "./problemReducers";

const rootReducer = combineReducers({
  problems: ProblemReducers,
  codeSubmittedStatus: submitCode,
});

export default rootReducer;
