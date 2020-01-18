import axios from "axios";

import { POST_POST, SET_POSTS } from "../types";

export const postPostData = userPost => dispatch => {
  // dispatch({ type: LOADING_UI });
  axios
    .post("/posts", userPost)
    .then(res => {
      console.log("res post : ", res);
    })
    .catch(err => {
      console.log("errornya :", err);
    });
};

export const getPostsData = () => dispatch => {
  axios
    .get(`/posts`)
    .then(res => {
      setPostsData(res.data);
      dispatch({
        type: SET_POSTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

const setPostsData = data => {
  let obj = data;
  let myJSON = JSON.stringify(obj);
  localStorage.setItem("dataPosts", myJSON);
};
