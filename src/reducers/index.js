import { combineReducers } from "redux";
import ProblemReducers, { submitCode } from "./problemReducers";
import AuthorizationReducer from "./authorizationReducers";
import ProblemStatusReducers from "./problemStatusReducers";

const rootReducer = combineReducers({
  problems: ProblemReducers,
  problemStatus: ProblemStatusReducers,
  codeSubmittedStatus: submitCode,
  authorization: AuthorizationReducer,
});

export default rootReducer;
