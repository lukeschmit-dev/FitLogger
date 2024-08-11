import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="Navbar">
      <NavLink
        style={({ isActive }) => {
          return isActive ? { backgroundColor: "rgb(121, 208, 255)" } : {};
        }}
        className="NavLink"
        to="/Results"
      >
        RESULTS
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { backgroundColor: "blanchedalmond" } : {};
        }}
        className="NavLink"
        to="/Dashboard"
      >
        DASHBOARD
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { backgroundColor: "blanchedalmond" } : {};
        }}
        className="NavLink"
        to="/Settings"
      >
        SETTINGS
      </NavLink>
    </nav>
  );
};

export default Navbar;
