import { SET_LOGIN, SET_LOGOUT } from "../types/login-types";

const initialValues = {
  isLoggedIn: false,
  loggedUser: null,
  token: "",
};

const loginReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, ...action.payload, isLoggedIn: true };
    case SET_LOGOUT:
      return { ...state, loggedUser: null, token: "", isLoggedIn: false };
    default:
      return state;
  }
};

export default loginReducer;
