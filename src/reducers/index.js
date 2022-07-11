import { combineReducers } from "redux";
import ProblemReducers, { submitCode } from "./problemReducers";
import AuthorizationReducer from "./authorizationReducers";
import ProblemStatusReducers from "./problemStatusReducers";
import DiscussionReducers from "./discussionReducers";

const rootReducer = combineReducers({
  problems: ProblemReducers,
  problemStatus: ProblemStatusReducers,
  codeSubmittedStatus: submitCode,
  authorization: AuthorizationReducer,
  discussion: DiscussionReducers,
});

export default rootReducer;
