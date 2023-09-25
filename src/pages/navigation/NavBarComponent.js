import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navBar">
      <nav className="navbar navbar-light bg-light d-flex justify-content-center align-items-center">
        <div className="nav-items">
          <a className="navbar-brand">
            <Link to="/about">About</Link>
          </a>
          <a class="navbar-brand">
            <Link to="/notFound">Sign in</Link>
          </a>
        </div>
      </nav>
    </div>
  );
};
