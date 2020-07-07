import React from "react";
import "../../assets/css/Homepage.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
const RestaurantCard = (props) => {
  return (
    <div className="RestaurantCard">
      <div className="card-container">
        <div className="restaurant-image">
          <div className="btn-container">
            <button className="btn-view-menu">
              <Link to={`/restaurant/${props.restaurantDetails._id}`}>
                View Menu
              </Link>
              {/* <button onClick={handleViewMenu}>View Menu</button> */}
            </button>
          </div>
        </div>
        <div className="restaurant-details">
          <div className="restaurant-name">
            <div className="value-restaurant-name">
              <span className="text-restaurant-name">
                {props.restaurantDetails.name}
              </span>
            </div>
            {/* <div className="rating">rating</div> */}
          </div>
          <div className="second-container">
            <div className="description">
              <div className="value-description">
                {/* {props.restaurantDetails.location} */}
                <span>
                  qwertyuioplkjhgfdsazxcvbnmqwertyuioplkjhgfdsazxcvbnmqwertyuioplkjhgfdsazxcvbnmqwertyuioplkjhgfdsa
                </span>
              </div>
            </div>
            <div className="address">
              <div className="value-address">
                <span>City</span>
                <span>Mumbai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
