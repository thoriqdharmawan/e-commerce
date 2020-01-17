import axios from "axios";

import {
  SET_USER,
  LOADING_UI,
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED
} from "../types";

export const loginUser = userData => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then(res => {
      console.log("response : ", res);
      let headers = new Headers();
      dispatch(getAllUserData());
      setAuthorizationHeader(res.data.accessToken);
      // dispatch({ type: SET_AUTHENTICATED });
      console.log(localStorage.FBIdToken);
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
      let headers = new Headers();
      setAuthorizationHeader(res.data.accessToken);
      dispatch({ type: SET_AUTHENTICATED });
      console.log(localStorage.FBIdToken);
    })
    .catch(error => {
      console.log("err :", error.response);
    });
};

export const getAllUserData = () => dispatch => {
  dispatch({ type: LOADING_USER });
  axios
    .get("/users")
    .then(res => {
      console.log("all userdata : ", res.data);
    })
    .catch(err => console.log(err));
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
