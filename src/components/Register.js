import React, { Component } from "react";
import { connect } from "react-redux";
import "../assets/css/Homepage.scss";
import { handleSignUp } from "../redux/user/UserActions";
import { withRouter } from "react-router";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSignUp(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="Register">
        {/* <div>
        </div> */}
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="input-username">
            <label>Name</label>
            <input
              type="text"
              // className="form-control login-password"
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-email">
            <label>Email</label>
            <input
              type="email"
              // className="form-control login-email"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-password">
            <label>Password</label>
            <input
              type="password"
              // className="form-control login-password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-repeatPassword">
            <label>Repeat Password</label>
            <input
              type="password"
              // className="form-control login-password"
              name="repeatPassword"
              onChange={this.handleChange}
            />
          </div>
          <div className="button-wrapper">
            <button type="submit" className="btn btn-outline-primary ">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     user: state.currentUser,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    handleSignUp: (userObj) => dispatch(handleSignUp(userObj)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
