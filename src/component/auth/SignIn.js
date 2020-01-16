import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { signIn } from "../../store/actions/authAction";

class SignIn extends Component {
  state = {};
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.props.signIn(this.state);
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
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
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
          {this.props.authError ? <p>{this.props.authError}</p> : null}
        </form>
      </div>
    );
  }
}
const maspStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return { signIn: credentials => dispatch(signIn(credentials)) };
};

export default connect(
  maspStateToProps,
  mapDispatchToProps
)(SignIn);
