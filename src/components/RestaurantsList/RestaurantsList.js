import React from "react";
import "../../assets/css/Homepage.scss";
import RestaurantCard from "./RestaurantCard";
import { useSelector } from "react-redux";
import notFoundIcon from "../../assets/images/not-found.png";

const RestaurantsList = () => {
  const restaurants = useSelector((state) => state.restaurant.restaurantList);
  const filteredRestaurants = useSelector(
    (state) => state.restaurant.filteredRestaurants
  );
  console.log("restaurant", restaurants);
  return (
    <div className="RestaurantsList">
      {restaurants && restaurants.length > 0 ? (
        filteredRestaurants && filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant._id}
                restaurantDetails={restaurant}
              />
            );
          })
        ) : (
          restaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant._id}
                restaurantDetails={restaurant}
              />
            );
          })
        )
      ) : (
        <div className="not-found-container">
          <span>Nothing to show</span>
          <img src={notFoundIcon} />
        </div>
      )}

      {/* 
{restaurants && restaurants.length > 0 ? (
        restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              restaurantDetails={restaurant}
            />
          );
        })
      ) : filteredRestaurants && filteredRestaurants.length > 0 ? (
        filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant._id}
              restaurantDetails={restaurant}
            />
          );
        })
      ) : (
        <div>No restaurants to show</div>
      )} */}
    </div>
  );
};

export default RestaurantsList;
