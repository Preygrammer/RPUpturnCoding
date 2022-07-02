import axios from "axios";
import {
  AUTHENTICATED,
  NOT_AUTHENTICATED,
  URL,
} from "../constants/actionTypes";

const setToken = (token) => {
  localStorage.setItem("token", token);
  localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

export const getToken = () => {
  const now = new Date(Date.now()).getTime();
  const timeAllowed = 1000 * 60 * 30;
  const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
  if (timeSinceLastLogin < timeAllowed) {
    return localStorage.getItem("token");
  }
};

export const deleteUserSession = () => {
  console.log("Token deleted");
  localStorage.removeItem("token");
  localStorage.removeItem("lastLoginTime");
  localStorage.removeItem("currentUser");
};

export const signupUser = (credentials) => {
  return (dispatch) => {
    return fetch(`${URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: credentials }),
    }).then((res) => {
      if (res.ok) {
        setToken(res.headers.get("Authorization"));
        return res
          .json()
          .then((userJson) =>
            dispatch({ type: AUTHENTICATED, payload: userJson })
          );
      } else {
        return res.json().then((errors) => {
          dispatch({ type: NOT_AUTHENTICATED });
          return Promise.reject(errors);
        });
      }
    });
  };
};

export const loginUser = (credentials) => {
  return (dispatch) => {
    return axios
      .post(`${URL}/login`, credentials)
      .then((response) => {
        const { id, token, firstName, lastName } = response.data;
        setToken(token);
        dispatch({ type: AUTHENTICATED, payload: response.data });
        // store the currentUser
        const currentUser = {
          id,
          firstName,
          lastName,
        };
        console.log("Current User stored");
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      })
      .catch(() => {
        dispatch({ type: NOT_AUTHENTICATED });
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    return axios
      .delete(`${URL}/logout_user`, {
        headers: {
          "x-access-token": getToken(),
        },
      })
      .then((response) => {
        // If the request fails and not call logout
        // fire still authenticated
        // else not authenticated
        deleteUserSession();
        response.data.auth
          ? dispatch({ type: AUTHENTICATED })
          : dispatch({ type: NOT_AUTHENTICATED });
      })
      .catch((error) => {
        dispatch({ type: NOT_AUTHENTICATED });
      });
  };
};

export const checkCurrentUserAuth = () => {
  return (dispatch) => {
    return axios
      .post(
        `${URL}/check_current_user`,
        {},
        {
          headers: {
            "x-access-token": getToken(),
          },
        }
      )
      .then((response) => {
        response.data.auth
          ? dispatch({ type: AUTHENTICATED })
          : dispatch({ type: NOT_AUTHENTICATED });
      })
      .catch((error) => {
        dispatch({ type: NOT_AUTHENTICATED });
      });
  };
};
