import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import siteLogo from "../assets/images/site-logo.png";
import { logOut } from "../redux/user/UserActions";
import { removeLocalstorageItem } from "../utils/functions";

const Navbar = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogut = (e) => {
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
              <div className="nav-links link-1">
                <Link to="/">Home</Link>
              </div>
              <div className="nav-links link-3">
                <Link to="/">About</Link>
              </div>
              <div className="nav-links link-2">
                <Link to="/login">Login</Link>
              </div>
              <div className="nav-links link-3">
                <Link to="/register">Register</Link>
              </div>
            </div>
          ) : (
            <div className="nav-links link-3">
              {/* <Link to="/"  */}
              <button onClick={handleLogut}>Logout</button>
              {/* </Link> */}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
