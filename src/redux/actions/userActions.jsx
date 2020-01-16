import React from "react";
import { Redirect } from "react-router-dom";

import {
  SET_USER,
  // SET_ERRORS,
  LOADING_UI,
  LOADING_USER,
  SET_AUTHENTICATED
} from "../types";
import axios from "axios";

export const loginUser = userData => dispatch => {
  // dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then(res => {
      // dispatch(getUserData());
      dispatch({ type: SET_AUTHENTICATED });
      return <Redirect to="/" />;
    })
    .catch(err => {
      console.log("errornya :", err);
      return <Redirect to="/login" />;
      // dispatch({
      //   type: SET_ERRORS,
      //   payload: err.response.data
      // });
    });
};

export const getUserData = () => dispatch => {
  // dispatch({ type: LOADING_USER });
  axios
    .get("/user")
    .then(res => {
      dispatch({
        type: SET_USER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
