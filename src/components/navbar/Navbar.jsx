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
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>00 Home</li>
          </NavLink>
          <NavLink
            to="/destination"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>01 Destination</li>
          </NavLink>
          <NavLink
            to="/crew"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>02 Crew</li>
          </NavLink>
          <NavLink
            to="/technology"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li>03 Technology</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
