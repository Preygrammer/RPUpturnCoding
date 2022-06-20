import axios from "axios";

export const FETCH_PROBLEMS = "FETCH_PROBLEMS";

export function fetchProblems() {
  const url = "192.168.1.2:7000/problems";

  const request = axios.get(url);
  return {
    type: FETCH_PROBLEMS,
    payload: request
  };
}
