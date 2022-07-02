import {
  AUTHENTICATED,
  NOT_AUTHENTICATED,
  AUTH_CHECK_USER,
} from "../constants/actionTypes";
import { deleteUserSession } from "../actions/auth";

const currentUser = localStorage.getItem("currentUser") || {};

console.log("Current User ", currentUser);

const initialState = {
  authChecked: false,
  loggedIn: false,
  currentUser: currentUser,
};

export default function authorization(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATED:
      console.log("AUTHENTICATED");
      return {
        authChecked: true,
        loggedIn: true,
        currentUser: action.payload,
      };
    case NOT_AUTHENTICATED:
      console.log("NOT AUTHENTICATED");
      // if not authenticated just delete the user session
      deleteUserSession();
      return {
        authChecked: true,
        loggedIn: false,
        currentUser: {},
      };
    case AUTH_CHECK_USER:
      return { ...state, authChecked: true, loggedIn: true };
    default:
      console.log("DEFAULT");
      return state;
  }
}
