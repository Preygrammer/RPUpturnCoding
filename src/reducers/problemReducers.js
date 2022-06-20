import { createReducer } from "@reduxjs/toolkit";
import { FETCH_PROBLEMS } from "../actions";

export default function getProblems(state = null, action) {
  switch (action.type) {
    case FETCH_PROBLEMS:
      return action.payload.data;
    default:
      return state;
  }
}

// export default createReducer(problemsState, (builder) => {
//   builder
//     .addCase(FETCH_PROBLEMS, (state, action) => {
//       return action.payload.data;
//     })
//     .addCase("SHOW_ME", (state, action) => {
//       console.log(action.payload)
//     })
//     .addCase("INCREMENT_BY_AMOUNT", (state, action) => {
//       state.value += Number(action.payload.value);
//     });
// });
