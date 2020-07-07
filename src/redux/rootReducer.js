import restaurantReducer from "./restaurant/RestaurantReducer";
import { combineReducers } from "redux";
import userReducer from "./user/UserReducer";

const rootReducer = combineReducers({
  user: userReducer,
  restaurant: restaurantReducer,
});

export default rootReducer;
