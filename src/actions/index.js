import axios from "axios";

export const GET_PROBLEMS = "GET_PROBLEMS";
export const GET_PROBLEM_BY_ID = "GET_PROBLEM_BY_ID";
export const SUBMIT_CODE = "SUBMIT_CODE";

const url = "http://localhost:7000/problems";

export function fetchProblems() {
  const request = axios.get(url);
  return {
    type: GET_PROBLEMS,
    payload: request,
  };
}

export function getProblemById(id) {
  const request = axios.post(url, {
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

// POST
export function submitCode(code, currentProblemId) {
  if (code === null || code === undefined) {
    return {};
  }

  // code = eval(code);
  const request = axios.post(`${url}/checkCode`, {
    code: code,
    currentProblemId: currentProblemId,
  });

  return {
    type: SUBMIT_CODE,
    payload: request,
  };
}
