import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../store/actions/authAction";
const SignetInLinks = props => {
  return (
    <ul className="right UlLinks">
      <li>
        <NavLink to="/createproject">NewProject</NavLink>
      </li>
      <li>
        <NavLink onClick={props.signOut} to="/">
          Log out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighter-1">
          {props.firstLetter}
        </NavLink>
      </li>
    </ul>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
const mapStateToProps = state => {
  console.log(state);
  return {
    firstLetter: state.firebase.profile.firstLetter
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignetInLinks);
