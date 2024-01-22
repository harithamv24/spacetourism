import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

const Navbar = ({ logo, close, menu }) => {
  const [isOpen, setIsopen] = useState(false);
  const open_side_bar = () => {
    console.log("hello");
    isOpen === false ? setIsopen(true) : setIsopen(false);
  };
  return (
    <nav className="navbar__list">
      <img src={logo} alt="logo" />
      <div className="small__line"></div>
      <div className="icon_hamburger" onClick={() => open_side_bar()}>
        <img src={menu} alt="menu__icon" />
      </div>
      <div className={`nav__list__section ${isOpen ? "opened" : ""}`}>
        <img
          src={close}
          alt="close-icon"
          id="close-icon"
          onClick={() => open_side_bar()}
        />
        <ul className="nav__list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              00 Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              01 Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              02 Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              03 Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
