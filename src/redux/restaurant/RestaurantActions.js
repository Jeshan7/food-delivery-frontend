import * as actionTypes from "./RestaurantTypes";
import { get, post, search } from "../../utils/API";
import RestaurantsList from "../../components/RestaurantsList/RestaurantsList";

export const fetchRestaurant = (restaurants) => {
  return {
    type: actionTypes.FETCH_RESTAURANT,
    payload: restaurants,
  };
};

export const fetchSuggestions = (restaurants) => {
  return {
    type: actionTypes.FETCH_SUGGESTIONS,
    payload: restaurants,
  };
};

export const fetchMenu = (menu) => {
  return {
    type: actionTypes.FETCH_MENU,
    payload: menu,
  };
};

// export const searchRestaurants = (restaurants) => {
//   return {
//     type: actionTypes.SEARCH_RESTAURANT,
//     payload: restaurants,
//   };
// };

export const fetchRestaurantList = () => {
  return async (dispatch) => {
    const { data } = await get("restaurants");
    dispatch(fetchRestaurant(data.restaurants));
  };
};

export const fetchMenuItems = () => {
  return async (dispatch) => {
    const { data } = await get("menu");
    dispatch(fetchMenu(data.menuList));
  };
};

export const suggestRestaurants = (name, location) => {
  return async (dispatch) => {
    const { data } = await post("restaurants/suggestions", {
      name,
      location: "Mumbai",
    });
    dispatch(fetchSuggestions(data.restaurant));
    console.log("rest", data.restaurant);
  };
};

export const searchRestaurants = (name) => {
  return async (dispatch) => {
    const { data } = await search("restaurants/search", name);
    // console.log("sasqas", data);
    dispatch(fetchRestaurant(data.restaurant));
  };
};
