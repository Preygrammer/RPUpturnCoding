import axios from "axios";

export const FETCH_PROBLEMS = "FETCH_PROBLEMS";

export function fetchProblems() {
  
  const url = "http://192.168.1.2:7000/problems";

  const request = axios.get(url);
  return {
    type: FETCH_PROBLEMS,
    payload: request
  };
}

export function showMeData(data) {
  return {
    type: "SHOW_ME",
    data
  }
}
