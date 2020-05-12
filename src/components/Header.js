import React from "react";
import Navbar from "./Navbar";
import "../assets/css/Homepage.scss";
import { Link } from "react-router-dom";
import video from "../assets/images/video.mp4";

const Header = () => {
  return (
    <div className="Header">
      {/* <div className="abc"><Navbar /></div> */}
      <div className="header-container">
        <div className="btn-container">
          <button className="btn-order">
            <Link to="/restaurants">Order Now</Link>
          </button>
        </div>
        <div className="xyz">
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Header;
