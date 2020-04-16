import React from 'react';
import Navbar from './Navbar';
import "../assets/css/Homepage.scss";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
          <Navbar />
          <div className="header-container">
          <div className="btn-container">
            <button className="btn-order"><Link to="/restaurants">Order Now</Link></button>
          </div>
          </div>
        </div>
    );
}

export default Header;
