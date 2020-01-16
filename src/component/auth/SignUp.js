import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { signUp } from "../../store/actions/authAction";

class SignUp extends Component {
  state = {
    email: "emails",
    password: "",
    firsvtName: "",
    lastName: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <input
              placeholder="First Name"
              onChange={this.handleChange}
              id="firstName"
              type="text"
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Last Name"
              onChange={this.handleChange}
              id="lastName"
              type="text"
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Email"
              onChange={this.handleChange}
              id="email"
              type="email"
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              onChange={this.handleChange}
              id="password"
              type="password"
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Register</button>
          </div>
          {authError ? <p>{authError}</p> : null}
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
