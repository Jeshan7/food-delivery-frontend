import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/css/Homepage.scss";
import { handleSignUp } from "../redux/user/UserActions";
import { withRouter } from "react-router";
import googleIcon from "../assets/images/google-icon.png";
import { Validator } from "../utils/functions";
import { handleError } from "../redux/user/UserActions";
import signup from "../assets/images/signup.png";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    error: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { error } = Validator(this.state, "signUp");
    if (error) {
      this.props.handleError(error);
      this.setState({ error });
    } else {
      this.props.handleSignUp(this.state);
    }

    if (!error && !this.props.userError) {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="Register">
        <div className="error-container">
          {this.state.error ? (
            <div className="error">
              <span>{this.props.userError}</span>
            </div>
          ) : (
            <img src={signup} />
          )}
        </div>
        <form className="register-form" onSubmit={this.handleSubmit}>
          <div className="input-name">
            <label>Name</label>
            <input
              type="text"
              className="form-control register-email"
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-email">
            <label>Email</label>
            <input
              type="email"
              className="form-control register-email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-password">
            <label>Password</label>
            <input
              type="password"
              className="form-control register-password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-password">
            <label>Repeat Password</label>
            <input
              type="password"
              className="form-control register-password"
              name="repeatPassword"
              onChange={this.handleChange}
            />
          </div>
          <div className="btn-register-container">
            {/* <div className="btn-google-register">
              <img src={googleIcon} width="40px" height="40px" />
            </div> */}
            <button type="submit" className="btn-one">
              <span>Sign Up</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userError: state.user.userError };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignUp: (userObj) => dispatch(handleSignUp(userObj)),
    handleError: (error) => dispatch(handleError(error)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);
