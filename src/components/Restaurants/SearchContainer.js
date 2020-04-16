import React from 'react';
import '../../assets/css/Homepage.scss';
import RestaurantsList from './RestaurantsList';

const SearchContainer = () => {
  return(
    <div className="SearchContainer">
      <div className="row row-container">
          <div className="row row-search-container">
            <div className="search-box">

            </div>
          </div>
          <div className="row row-restaurants-container">
          <div className="col-md-3 col-filter-container">
              <div className="filter-1">

              </div>
              <div className="filter-2">

              </div>
              <div className="filter-3">

              </div>
          </div>
          <div className="col-md-9 col-restaurants-container">
            <RestaurantsList />
          </div>
          </div>
      </div>   
    </div>
  );
}

export default SearchContainer;