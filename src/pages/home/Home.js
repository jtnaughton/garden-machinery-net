import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import grassLawnWithConcreteWall from "../../images/grassLawnWithConcreteWall.jpg";
import { NavBar } from "../navigation/NavBarComponent";

export const Home = () => {
  return (
    <>
      <div
        className="image"
        style={{ backgroundImage: `url(${grassLawnWithConcreteWall})` }}
      >
        <NavBar />
        <div className="container">
          <div className="landingPage d-flex flex-row justify-content-start align-items-start">
            <h1 className="landingPageTitle">David Naughton Mowers.</h1>
            <p className="landingPageDes align-self-center">
              High quality refurbished Lawnmowers and spare parts. <br />
              Unbeatable prices.
            </p>
          </div>
          <div className="buttonContainer align-self-end">
              <Link className="shopNowButton" to="/shop">
                Shop
              </Link>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="text-footer">Copyright ©-All rights are reserved</p>
      </footer>
    </>
  );
};
