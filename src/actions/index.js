import axios from "axios";
import {
  GET_PROBLEMS,
  GET_PROBLEM_BY_ID,
  GET_DISCUSSION,
  SUBMIT_CODE,
  URL,
} from "../constants/actionTypes";
export {
  signupUser,
  loginUser,
  logoutUser,
  checkCurrentUserAuth,
} from "./auth";

const fullUrl = `${URL}/problems`;

export function fetchProblems() {
  const request = axios.get(fullUrl);
  return {
    type: GET_PROBLEMS,
    payload: request,
  };
}

export function getProblemById(id) {
  const request = axios.post(fullUrl, {
    id: id,
  });

  return {
    type: GET_PROBLEM_BY_ID,
    payload: request,
  };
}

export function setPreviousProblemId(problem) {
  return {
    type: SET_PREVIOUS_PROBLEM_ID,
    payload: problem,
  };
}

export function setNextProblemId(problem) {
  return {
    type: SET_NEXT_PROBLEM_ID,
    payload: problem,
  };
}

// // POST
// export function submitCode(code, currentProblemId) {
//   if (code === null || code === undefined) {
//     return {};
//   }

//   // code = eval(code);
//   const request = axios.post(`${fullUrl}/checkCode`, {
//     code: code,
//     currentProblemId: currentProblemId,
//   });

//   return {
//     type: SUBMIT_CODE,
//     payload: request,
//   };
// }

// POST
export const submitCode = (code, currentProblemId) => {
  return (dispatch) => {
    return axios
      .post(`${fullUrl}/checkCode`, {
        code: code,
        currentProblemId: currentProblemId,
      })
      .then((response) => {
        const isCorrect = response.data;
        if (isCorrect) {
          dispatch({
            type: SUBMIT_CODE,
            payload: response,
          });
        }
      });
  };
};

export const getDiscussion = (problemId) => {
  return (dispatch) => {
    return axios
      .post(`${fullUrl}/getDiscussion`, {
        problemId,
      })
      .then((response) => {
        dispatch({ type: GET_DISCUSSION, payload: response.data });
      });
  };
};
