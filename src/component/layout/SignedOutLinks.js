import React from "react";
import { NavLink } from "react-router-dom";

const SignetInOut = () => {
  return (
    <ul className="right UlLinks">
      <li>
        <NavLink to="/signup">Sing Up</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Sing In</NavLink>
      </li>
    </ul>
  );
};

export default SignetInOut;
