import * as actionTypes from "./RestaurantTypes";

const initialState = {
  restaurantList: [],
  menuList: [],
  suggestions: [],
};

const restataurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_RESTAURANT:
      return {
        ...state,
        restaurantList: action.payload,
      };
    case actionTypes.FETCH_MENU:
      return {
        ...state,
        menuList: action.payload,
      };
    case actionTypes.FETCH_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload,
      };
    default:
      return state;
  }
};

export default restataurantReducer;
