import React from "react";
import "../../assets/css/Homepage.scss";
import RestaurantCard from "./RestaurantCard";
import { useSelector } from "react-redux";

const RestaurantsList = () => {
  const restaurants = useSelector((state) => state.restaurant.restaurantList);
  return (
    <div className="RestaurantsList">
      {restaurants.map((restaurant) => {
        return (
          <RestaurantCard key={restaurant._id} restaurantDetails={restaurant} />
        );
      })}
    </div>
  );
};

export default RestaurantsList;
