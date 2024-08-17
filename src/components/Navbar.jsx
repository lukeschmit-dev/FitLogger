import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="Navbar">
      <NavLink
        style={({ isActive }) => {
          return isActive ? { backgroundColor: "white" } : {};
        }}
        className="NavLink"
        to="/Results"
      >
        RESULTS
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { backgroundColor: "white" } : {};
        }}
        className="NavLink"
        to="/Dashboard"
      >
        DASHBOARD
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { backgroundColor: "white" } : {};
        }}
        className="NavLink"
        to="/Planner"
      >
        PLANNER
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? { backgroundColor: "white" } : {};
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
