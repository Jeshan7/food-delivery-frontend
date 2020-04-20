import React from 'react';
import '../../assets/css/Homepage.scss';

const RestaurantCard = () => {
  return(
    <div className="RestaurantCard">
      <div className="card-container">
        <div className="restaurant-image">
          <div className="btn-container">
            <button className="btn-view-menu">
              View Menu
            </button>
          </div>
        </div>
        <div className="restaurant-details">
          <div className="rating-container">
           ssd
            <div className="rating">rating</div>
          </div>
         <div className="second-container">
          <div className="address"></div>
          <div className="call"></div>
          </div> 
        </div> 
      </div>    
    </div>
  );
}

export default RestaurantCard;