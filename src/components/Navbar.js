import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="Navbar">
      <NavLink className="NavLink" to="/Results">
        RESULTS
      </NavLink>
      <NavLink className="NavLink" to="/Dashboard">
        DASHBOARD
      </NavLink>
      <NavLink className="NavLink" to="/Settings">
        SETTINGS
      </NavLink>
    </nav>
  );
};

export default Navbar;
