import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            end
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Acceuil</li>
          </NavLink>
          <NavLink
            to="/fav-movies"
            end
            className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
          >
            <li>Coup de coeur</li>
          </NavLink>
        </ul>
      </div>
      <div className="title">
        <h1>React Movies app</h1>
      </div>
    </header>
  );
};

export default Header;
