import React, { Component } from "react";
import "../assets/css/Homepage.scss";
import { connect } from "react-redux";
import { handleSignIn } from "../redux/user/UserActions";
import { withRouter } from "react-router";
import loginIcon from "../assets/images/btn-login.png";
import googleIcon from "../assets/images/google-icon.png";
import { Validator } from "../utils/functions";
import { handleError } from "../redux/user/UserActions";
import signin from "../assets/images/signin.png";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { error } = Validator(this.state, "signIn");
    if (error) {
      this.props.handleError(error);
      this.setState({ error });
    } else {
      this.props.handleSignIn(this.state);
    }

    if (!error && !this.props.userError) {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="Login">
        <div className="error-container">
          {this.state.error ? (
            <div className="error">
              <span>{this.props.userError}</span>
            </div>
          ) : (
            <img src={signin} />
          )}
        </div>
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
          <div className="btn-login-container">
            {/* <div className="btn-google-login">
              <img src={googleIcon} width="40px" height="40px" />
            </div> */}
            <button type="submit" className="btn-one">
              <span>Sign In</span>
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
    handleSignIn: (userObj) => dispatch(handleSignIn(userObj)),
    handleError: (error) => dispatch(handleError(error)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
