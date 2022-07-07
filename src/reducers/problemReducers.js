import {
  GET_PROBLEMS,
  GET_PROBLEM_BY_ID,
  SUBMIT_CODE,
  SET_SUBMIT_CODE_DEFAULT,
} from "../constants/actionTypes";

const initialState = {
  problems: [],
  currentProblem: [],
};

export default function getProblems(state = initialState, action) {
  switch (action.type) {
    case GET_PROBLEMS:
      const problems = action.payload.data;
      return { ...state, problems };
    case GET_PROBLEM_BY_ID:
      const currentProblem = action.payload.data;
      return { ...state, currentProblem };
    default:
      return state;
  }
}

export function submitCode(state = false, action) {
  switch (action.type) {
    case SUBMIT_CODE:
      console.log(action.payload);
      return action.payload.data;
    case SET_SUBMIT_CODE_DEFAULT:
      return (state = false);
    default:
      return state;
  }
}

// export function setPageProblemId(state = [], action) {
//   switch (action.type) {
//     case SET_PREVIOUS_PROBLEM_ID:
//       console.log(action.payload);
//       const prevId = action.payload?.id;
//       if (prevId === undefined) {
//         return state.concat([null]);
//       }
//       return state.concat([prevId]);
//     case SET_NEXT_PROBLEM_ID:
//       const nextId = action.payload?.id;
//       if (nextId === undefined) {
//         return state.concat([null]);
//       }
//       return state.concat([nextId]);
//     default:
//       return state;
//   }
// }

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
