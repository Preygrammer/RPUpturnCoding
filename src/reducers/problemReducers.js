import { createReducer } from "@reduxjs/toolkit";
import { GET_PROBLEMS, GET_PROBLEM_BY_ID } from "../actions";

export default function getProblems(state = null, action) {
  switch (action.type) {
    case GET_PROBLEMS:
      return action.payload.data;
    case GET_PROBLEM_BY_ID:
      return action.payload;
    default:
      return state;
  }
}

export function getProblemDetails(state = null, action) {

}

// export default createReducer(problemsState, (builder) => {
//   builder
//     .addCase(GET_PROBLEMS, (state, action) => {
//       return action.payload.data;
//     })
//     .addCase("SHOW_ME", (state, action) => {
//       console.log(action.payload)
//     })
//     .addCase("INCREMENT_BY_AMOUNT", (state, action) => {
//       state.value += Number(action.payload.value);
//     });
// });
