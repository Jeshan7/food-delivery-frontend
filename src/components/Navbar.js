import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import siteLogo from "../assets/images/site-logo.png";
import { logOut } from "../redux/user/UserActions";
import { removeLocalstorageItem } from "../utils/functions";
import logoutIcon from "../assets/images/logout.png";

const Navbar = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logOut());
    removeLocalstorageItem();
  };

  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand site-navbar">
        <div className="col-md-3 navbar-brand-box">
          <div>
            <a className="navbar-brand">
              <img src={siteLogo} width="45px" height="45px" />
            </a>
          </div>
        </div>
        <div className="col-md-9 navbar-container">
          {!isAuthenticated ? (
            <div className="nav-links">
              <div className="nav-links link-home">
                <Link to="/">Home</Link>
              </div>

              <div className="nav-links link-login">
                <Link to="/login">Login</Link>
              </div>
              <div className="nav-links link-register">
                <Link to="/register">Register</Link>
              </div>
            </div>
          ) : (
            <div className="navlinks-auth">
              <div className=" link-home-auth">
                <Link to="/">Home</Link>
              </div>
              <div className=" link-logout" onClick={handleLogout}>
                <span>Logout</span>
                {/* <img src={logoutIcon} /> */}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
