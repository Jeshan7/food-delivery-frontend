import React, { Component } from "react";
import "../assets/css/Homepage.scss";
import Overview from "../components/Restaurant/Overview";
import Menu from "../components/Restaurant/Menu";
import Photos from "../components/Restaurant/Photos";

class RestaurantContainer extends Component {
  state = {
    currentOption: "overview",
  };

  handleOptions = (option) => {
    console.log("option", option);

    if (option === "menu") {
      this.setState({ currentOption: "menu" });
    } else if (option === "photos") {
      this.setState({ currentOption: "photos" });
    } else {
      this.setState({ currentOption: "overview" });
    }
  };

  render() {
    let currentSlide = "";
    if (this.state.currentOption === "menu") {
      currentSlide = <Menu />;
    } else if (this.state.currentOption === "photos") {
      currentSlide = <Photos />;
    } else {
      currentSlide = <Overview />;
    }

    return (
      <div className="RestaurantContainer">
        <div className="row row-pictures">
          <div className="col-md-10 col-pictures"></div>
        </div>
        <div className="row row-options">
          <div className="col-md-6 col-options">
            <div className="option-navigation">
              <div
                className="overview"
                onClick={() => this.handleOptions("overview")}
              >
                <div className="image-overview"></div>
                <div className="text-overview">
                  <div> Overview</div>
                </div>
              </div>
              <div className="menu" onClick={() => this.handleOptions("menu")}>
                <div className="image-menu"></div>
                <div className="text-menu">
                  <div> Menu</div>
                </div>
              </div>
              <div
                className="photos"
                onClick={() => this.handleOptions("photos")}
              >
                <div className="image-photos"></div>
                <div className="text-photos">
                  <div> Photos </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-md-8 col-content">{currentSlide}</div>
        </div>
        <div className="footer-restaurant"></div>
      </div>
    );
  }
}

export default RestaurantContainer;
