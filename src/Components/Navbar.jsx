import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="/" className="navbar-link" activeClassName="active">
            <i className="fas fa-home"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Instruction" className="navbar-link" activeClassName="active">
            <i className="fas fa-question-circle"></i> Quiz
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/result"
            className="navbar-link"
            activeClassName="active"
          >
            <i className="fas fa-trophy"></i> Result
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
