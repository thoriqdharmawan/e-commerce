import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER
} from "../types";

let text = localStorage.getItem("dataUser");
let obj2 = JSON.parse(text);
let cred = obj2;

const initialState = {
  authenticated: false,
  loading: false,
  credentials: cred
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
        credentials: null
      };
    case SET_USER:
      return {
        ...state,
        loading: false,
        credentials: [{ ...action.payload }]
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
