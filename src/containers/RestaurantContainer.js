import React, { Component } from "react";
import "../assets/css/Homepage.scss";
import Overview from "../components/Restaurant/Overview";
import Menu from "../components/Restaurant/Menu";
import Photos from "../components/Restaurant/Photos";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { fetchMenuItems } from "../redux/restaurant/RestaurantActions";

class RestaurantContainer extends Component {
  state = {
    currentOption: "menu",
    menuItems: null,
  };

  async componentDidMount() {
    await this.props.fetchMenuItems();
    this.currentMenuItems();
  }

  currentMenuItems = () => {
    if (this.props.menuList && this.props.menuList.length > 0) {
      const menuItems = this.props.menuList.map((menu) => {
        if (menu.restaurant_id === this.props.match.params.restaurant_id) {
          return menu;
        }
      });
      this.setState({ menuItems: menuItems[0] });
    }
  };

  handleOptions = (option) => {
    if (option === "menu") {
      this.setState({ currentOption: "menu" });
    } else if (option === "photos") {
      this.setState({ currentOption: "photos" });
    }
    // else {
    //   this.setState({ currentOption: "overview" });
    // }
  };

  render() {
    let currentSlide = "";
    if (this.state.currentOption === "menu") {
      currentSlide = <Menu menuItems={this.state.menuItems} />;
    } else if (this.state.currentOption === "photos") {
      currentSlide = <Photos />;
    }
    //  else {
    //   currentSlide = <Overview />;
    // }

    return (
      <div className="RestaurantContainer">
        <div className="abcd">
          <Navbar />
        </div>
        <div className="row row-pictures">
          <div className="col-md-10 col-pictures">
            <div className="restaurant-name"> Jeshan Khan</div>
          </div>
        </div>
        <div className="row row-options">
          <div className="col-md-6 col-options">
            <div className="option-navigation">
              <div className="menu" onClick={() => this.handleOptions("menu")}>
                {/* <div className="image-menu"></div> */}
                <div className="text-menu">
                  <div> Menu</div>
                </div>
              </div>
              <div
                className="photos"
                onClick={() => this.handleOptions("photos")}
              >
                {/* <div className="image-photos"></div> */}
                <div className="text-photos">
                  <div> Photos </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-md-8 col-content">
            {/* <div className="current-slide"> */}
            {currentSlide}
            {/* </div> */}
            {/* <div className="btn-place-order">dsadjd</div> */}
          </div>
          <div className="col-md-2 col-btn-container">
            <div className="btn-place-order ">place order</div>
          </div>
        </div>
        <div className="footer-restaurant"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuList: state.restaurant.menuList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMenuItems: () => dispatch(fetchMenuItems()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantContainer);
