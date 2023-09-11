import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="content">
      <nav className="navbar background">
        <ul className="nav-list">
          <li>
            <a href="/servicingRepairs">Servicing and Repairs</a>
          </li>
          <li>
            <a href="/spareParts">Spare Parts</a>
          </li>
          <li>
            <a href="/refurbishedMowers">Refurbished Lawn Mowers</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
