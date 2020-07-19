import * as actionTypes from "./RestaurantTypes";

const initialState = {
  restaurantList: [],
  menuList: [],
  suggestions: [],
  filteredRestaurants: [],
  userError: null,
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
    case actionTypes.FILTER_RESTAURANTS:
      return {
        ...state,
        filteredRestaurants: action.payload,
      };

    default:
      return state;
  }
};

export default restataurantReducer;
