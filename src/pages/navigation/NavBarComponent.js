import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="content">
      <nav className="navbar navbar-light">
        <ul className="nav-list">
          <li>
            <Link class="navbar-brand" to="/about">About</Link>
          </li>
          <li>
            <Link class="navbar-brand" to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
