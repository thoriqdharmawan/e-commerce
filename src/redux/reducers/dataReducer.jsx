import { SET_POSTS } from "../types";

let text = localStorage.getItem("dataPosts");
let obj2 = JSON.parse(text);
let cred = obj2;

const initialState = {
  posts: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {
        posts: action.payload
      };
    default:
      return state;
  }
}
