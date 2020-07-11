import React, { Component } from "react";
import "../assets/css/Homepage.scss";
import RestaurantsList from "../components/RestaurantsList/RestaurantsList";
import { connect } from "react-redux";
import {
  fetchRestaurantList,
  fetchRestaurant,
  filterRestaurants,
} from "../redux/restaurant/RestaurantActions";
import SearchBar from "../components/RestaurantsList/SearchBar";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
// import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
// import RangeSlider from "react-bootstrap-range-slider";

class SearchContainer extends Component {
  //Fetch restaurants
  state = {
    filter_ratings: 0,
    filter_cost: 0,
  };

  componentDidMount() {
    // this.props.fetchRestaurantList();
  }

  handleRatings = (value) => {
    this.setState({ filter_ratings: value });
    let filteredByRating = this.props.restaurants.filter((doc) => {
      return doc.ratings >= value;
    });
    console.log("asnjdnasjdnjsadn", this.props.filteredRestaurants);
    this.props.filterRestaurants(filteredByRating);
  };

  handleCost = (value) => {
    this.setState({ filter_cost: value });
    let x = this.props.restaurants.filter((doc) => {
      return doc.cost_for_two <= value;
    });
    // console.log("asasa", x);
  };

  render() {
    return (
      <div className="SearchContainer">
        <div className="row row-container">
          <div className="row row-search-container">
            <SearchBar />
          </div>
          <div className="row row-restaurants-container">
            <div className="col-md-3 col-filter-container">
              <div className="filter-ratings">
                <div className="heading-ratings">
                  <span>Ratings</span>
                </div>
                <div className="slider-container">
                  <Slider
                    value={this.state.filter_ratings}
                    orientation="horizontal"
                    max={5}
                    onChange={this.handleRatings}
                  />
                </div>
                <div className="ratings-value">
                  <span>{this.state.filter_ratings}</span>
                </div>
              </div>
              {/* <div className="filter-cost">
                <div className="heading-cost">
                  <span>Cost for two</span>
                </div>
                <div className="slider-container">
                  <Slider
                    value={this.state.filter_cost}
                    orientation="horizontal"
                    max={500}
                    onChange={this.handleCost}
                  />
                </div>
                <div className="cost-value">
                  <span>{this.state.filter_cost}</span>
                </div>
              </div> */}
              {/* <div className="filter-3"></div> */}
            </div>
            <div className="col-md-9 col-restaurants-container">
              <RestaurantsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurant.restaurantList,
    filteredRestaurants: state.restaurant.filteredRestaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurantList: () => dispatch(fetchRestaurantList()),
    filterRestaurants: (filteredByRating) =>
      dispatch(filterRestaurants(filteredByRating)),
    // filterRestaurants: (val) => dispatch(filterRestaurants(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
