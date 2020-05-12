import React from "react";
import Login from "./Login";
import "../assets/css/Homepage.scss";
import foodImage from "../assets/images/auth-image.jpg";
import Register from "./Register";
import { Link } from "react-router-dom";

const AuthenticationPage = (props) => {
  const handleAuth = () => {
    if (props.location.pathname === "/login") {
      props.history.push("/register");
    } else {
      props.history.push("/login");
    }
  };

  return (
    <div className="AuthenticationPage">
      <div className="row">
        <div className="col-md-6 col-login">
          {props.location.pathname === "/login" ? (
            <div className="login-container">
              <Login />
            </div>
          ) : (
            <div className="login-container">
              <Register />
            </div>
          )}
        </div>
        <div className="col-md-6 col-picture">
          <div className="image-container">
            {props.location.pathname === "/login" ? (
              <button className="btn-signup" onClick={handleAuth}>
                Sign Up
              </button>
            ) : (
              <button className="btn-signup" onClick={handleAuth}>
                Sign In
              </button>
            )}
            <div className="link-home">
              {" "}
              <Link to="/"> Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
