import axios from "axios";

export const GET_PROBLEMS = "GET_PROBLEMS";

export const GET_PROBLEM_BY_ID = "GET_PROBLEM_BY_ID";

export function fetchProblems() {
  
  const url = "http://localhost:7000/problems";

  const request = axios.get(url);
  return {
    type: GET_PROBLEMS,
    payload: request
  };
}

export function getProblemById(id) {
  return {
    type: GET_PROBLEM_BY_ID,
    id
  }
}
