import * as actionTypes from "./UserTypes";
import axios from "axios";
import { SignUp, SignIn } from "../../utils/API";

export const signUp = (userObj) => {
  return {
    type: actionTypes.SIGN_UP,
    payload: userObj,
  };
};

export const signIn = (userObj) => {
  return {
    type: actionTypes.SIGN_IN,
    payload: userObj,
  };
};

export const logOut = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const handleSignUp = (userObj) => {
  return async (dispatch) => {
    const { data } = await SignUp(userObj);
    if (data.message === "User created") {
      dispatch(signUp(data.user));
    }
  };
};

export const handleSignIn = (userObj) => {
  return async (dispatch) => {
    const { data } = await SignIn(userObj);
    if (data.message === "Authentication successful") {
      dispatch(signIn(data.currentUser));
      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail", data.currentUser.email);
      localStorage.setItem("userName", data.currentUser.name);
    }
  };
};
