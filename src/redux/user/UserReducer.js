import * as actionTypes from "./UserTypes";

const initialState = {
  currentUser: {},
  isAuthenticated: false,
  userError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP:
      return {
        ...state,
        currentUser: action.payload,
        // isAuthenticated: true,
      };
    case actionTypes.SIGN_IN:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        currentUser: {},
        isAuthenticated: false,
      };
    case actionTypes.USER_ERROR:
      return {
        ...state,
        userError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
