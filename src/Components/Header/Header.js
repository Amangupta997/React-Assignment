import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-container">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/friendslist">
        Friends List
      </NavLink>
      <NavLink className="nav-link" to="/myprofile">
        My Profile
      </NavLink>
    </nav>
  );
};

export default Header;
