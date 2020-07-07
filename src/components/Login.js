import React, { Component } from "react";
import "../assets/css/Homepage.scss";
import { connect } from "react-redux";
import { handleSignIn } from "../redux/user/UserActions";
import { withRouter } from "react-router";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSignIn(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="Login">
        {/* <div> </div> */}
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="input-email">
            <label>Email</label>
            <input
              type="email"
              className="form-control login-email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-password">
            <label>Password</label>
            <input
              type="password"
              className="form-control login-password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="button-wrapper">
            <button type="submit" className="btn btn-outline-primary ">
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignIn: (userObj) => dispatch(handleSignIn(userObj)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Login));
