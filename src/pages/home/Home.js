import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import landingPage from "../../images/landingPage.jpg";
import { NavBar } from "../navigation/NavBarComponent";

export const Home = () => {
  return (
    <div className="content">
      {/* <div className="img d-flex justify-content-center">
      <NavBar/>
        <img src={landingPage} />
      </div> */}

      <div className="image" style={{ backgroundImage: `url(${landingPage})` }}><NavBar/></div>

      <div className="">
        <footer className="footer">
          <p className="text-footer">Copyright ©-All rights are reserved</p>
        </footer>
      </div>
    </div>
  );
};