import * as actionTypes from "./UserTypes";

const initialState = {
  currentUser: {},
  isAuthenticated: false,
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
    default:
      return state;
  }
};

export default userReducer;
