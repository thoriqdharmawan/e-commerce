import axios from "axios";

import {
  SET_USER,
  LOADING_UI,
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED
} from "../types";

export const loginUser = userData => dispatch => {
  // dispatch({ type: LOADING_UI });
  dispatch(getUserData(userData.email));
  axios
    .post("/login", userData)
    .then(res => {
      setAuthorizationHeader(res.data.accessToken);
    })
    .catch(err => {
      console.log("errornya :", err);
    });
};

export const userRegister = newUserData => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/register", newUserData)
    .then(res => {
      setAuthorizationHeader(res.data.accessToken);
      dispatch({ type: SET_AUTHENTICATED });
    })
    .catch(error => {
      console.log("err :", error.response);
    });
};

export const getUserData = email => dispatch => {
  dispatch({ type: LOADING_USER });
  axios
    .get(`/users?email=${email}`)
    .then(res => {
      setUserData(res.data);

      dispatch({
        type: SET_USER,
        payload: res.data[0]
      });
      dispatch({ type: SET_AUTHENTICATED });
      console.log(res.data[0]);
    })
    .catch(err => console.log(err));
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("FBIdToken");
  localStorage.removeItem("dataUser");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({
    type: SET_UNAUTHENTICATED
  });
};

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};

const setUserData = data => {
  let obj = data;
  let myJSON = JSON.stringify(obj);
  localStorage.setItem("dataUser", myJSON);
};
