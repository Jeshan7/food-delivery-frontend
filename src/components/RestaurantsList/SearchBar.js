import React, { useState, useRef } from "react";
import "../../assets/css/Homepage.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  searchRestaurants,
  suggestRestaurants,
} from "../../redux/restaurant/RestaurantActions";
import { withRouter } from "react-router-dom";
// import Drop from "../Dropdown";
import useOnClickOutside from "use-onclickoutside";
import search_icon from "../../assets/images/search.png";

const SearchBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, openModal] = useState(false);
  const restaurants = useSelector((state) => state.restaurant.suggestions);
  const [name, setName] = useState({});
  const dispatch = useDispatch();

  const ref = useRef(null);
  // const cityRef = useRef(null);
  // const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setIsOpen(false));
  useOnClickOutside(ref, () => openModal(false));

  const handleSearch = (e) => {
    dispatch(suggestRestaurants(e.target.value));
    setName(e.target.value);
    console.log("aaa", restaurants);
    if (restaurants && restaurants.length > 0) {
      setIsOpen(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchRestaurants(name));
    openModal(false);
  };

  const handleSuggestion = (restaurant_id) => {
    props.history.push(`/restaurant/${restaurant_id}`);
  };

  const handleModal = () => {
    openModal(true);
  };

  const handleClick = (city) => {
    localStorage.setItem("current-city", city);
    openModal(false);
  };

  return (
    <div className="SearchBar">
      <div className="search-container">
        <div className="search-box">
          <form onSubmit={handleSubmit} className="form-container">
            <input
              className="input-search"
              placeholder="Search"
              onChange={handleSearch}
            />
            <button className="btn-search">
              <img type="submit" src={search_icon} width="48px" height="48px" />
            </button>
          </form>
        </div>

        <div className="suggestion-container">
          {isOpen && restaurants && restaurants.length > 0 ? (
            <div ref={ref} className="suggestions">
              {restaurants.map((doc) => {
                return (
                  <div
                    className="suggestion-items"
                    onClick={() => handleSuggestion(doc.restaurant_id)}
                  >
                    <span>{doc.name}</span>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      <div className="select-city-container">
        <div className="current-city" onClick={handleModal}>
          <span>
            {localStorage.getItem("current-city") ? (
              localStorage.getItem("current-city")
            ) : (
              <div>Pune</div>
            )}
          </span>
        </div>

        {modal ? (
          <div ref={ref} className="options-city">
            {["Mumbai", "Delhi", "Lucknow", "Pune"].map((doc) => {
              return (
                <div className="options" onClick={() => handleClick(doc)}>
                  <span>{doc}</span>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(SearchBar);
