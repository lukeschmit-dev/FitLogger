import React, {useRef} from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navSizeRef = useRef(null)

  return (
    <nav id="Navbar" ref={navSizeRef}>
      <div id="nav-logoTitle"><img src="images/fitLoggerLogoWh.svg"></img>FitLogger</div>
      <NavLink
        style={({ isActive }) => {
          return isActive ? {filter: "drop-shadow(0px 0px 2px var(--colorBone))" } : {};
        }}
        className="NavLink"
        to="/Results"
      >
        RESULTS
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? {filter: "drop-shadow(0px 0px 2px var(--colorBone))" } : {};
        }}
        className="NavLink"
        to="/Dashboard"
      >
        DASHBOARD
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return isActive ? {filter: "drop-shadow(0px 0px 2px var(--colorBone))" } : {};
        }}
        className="NavLink"
        to="/Planner"
      >
        PLANNER
      </NavLink>
      {/* <NavLink
        style={({ isActive }) => {
          return isActive ? {filter: "drop-shadow(0px 0px 2px var(--colorBone))" } : {};
        }}
        className="NavLink"
        to="/Settings"
      >
        SETTINGS
      </NavLink> */}
    </nav>
  );
};

export default Navbar;
