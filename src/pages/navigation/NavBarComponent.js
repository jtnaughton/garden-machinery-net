import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="content">
      <nav className="navbar navbar-light">
        <ul className="nav-list">
          <li>
            <a class="navbar-brand" href="/about">About</a>
          </li>
          <li>
            <a class="navbar-brand" href="/shop">Shop</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
