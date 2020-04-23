import React from 'react';
import Navbar from './Navbar';
import "../assets/css/Homepage.scss";
import { Link } from 'react-router-dom';
import vid from "../assets/images/video.mp4";
const Header = () => {
  return (
    <div className="Header">
      <div className="abc"><Navbar /></div>
      <div className="header-container">
        <div className="xyz">
          <video className="video-header" autoPlay loop muted>
            <source src={vid} type="video/mp4" />
          </video>
          <div className="btn-container">
            <button className="btn-order"><Link to="/restaurants">Order Now</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
