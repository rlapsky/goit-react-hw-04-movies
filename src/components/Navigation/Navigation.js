import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink activeClassName="active" className="text-blue-500" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" className="text-blue-500" to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
