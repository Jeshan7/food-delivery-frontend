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

export const handleError = (error) => {
  return {
    type: actionTypes.USER_ERROR,
    payload: error,
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
    // const data = await SignIn(userObj);
    SignIn(userObj)
      .then((response) => {
        const { data } = response;
        if (data.message === "Authentication successful") {
          dispatch(signIn(data.currentUser));
          localStorage.setItem("token", data.token);
          localStorage.setItem("userEmail", data.currentUser.email);
          localStorage.setItem("userName", data.currentUser.name);
        }
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 401") {
          dispatch(handleError("Authentication Failed "));
        }
      });
  };
};
