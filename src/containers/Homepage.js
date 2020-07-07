import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../assets/css/Homepage.scss";
import Login from "../components/Login";
import Overview from "../components/Overview";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Description from "../components/Description";

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="abcd">
          <Navbar />
        </div>
        <Header />
        <Overview />
        <Description />
        <Footer />
        <div></div>
      </div>
    );
  }
}

export default Homepage;
