import React from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <div className="menu-header">
        <div className="close-button" onClick={onClose}>
          <div className="crossbox">
            <div className={`bar ${isOpen ? "rotate-up" : ""}`}></div>
            <div className={`bar ${isOpen ? "rotate-down" : ""}`}></div>
          </div>

          <div className={`bar ${isOpen ? "cross" : ""}`}></div>
        </div>
      </div>
      <ul className="menu-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#cards-container">Services</Link>
        </li>
        <li>
          <Link to="#scrolling">Our Clients</Link>
        </li>
        <li>
          <Link to="/careers">Careers</Link>
        </li>
        <li>
          <a href="mailto:shivaprasadshetty112@gmail.com">Contact us</a>
        </li>
        <li>
          <Link to="#footer">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
